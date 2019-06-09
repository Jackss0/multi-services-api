const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/Users/Users')

if (typeof localStorage === "undefined" || localStorage === null) {
  const LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}


passport.serializeUser((user, done) => {
  done(null, user.Dni);
});

passport.deserializeUser(async (Dni, done) => {
  const user = await User.findById(Dni);
  done(null, user)
});


//Registrar
passport.use('local-signup', new LocalStrategy({
  usernameField: 'Dni',
  passwordField: 'Password',
  passReqToCallback: true
}, async (req, Dni, Password, done) => {
  const user = await User.findOne({ 'Dni': Dni })
  console.log(user)
  if (user) {
    console.log('Ya existe una cuenta registrada con este Dni')
    return done(null, false, req.flash('signupMessage','Ya existe una cuenta registrada con este Dni') );
  } else {
    const newUser = new User();
    newUser.Nombres = req.body.Nombres;
    newUser.Apellidos = req.body.Apellidos;
    newUser.Dni = Dni;
    newUser.Cui = req.body.Cui;
    newUser.Password = Password;

    

    console.log(newUser);
    await newUser.save();
    done(null, newUser);
  }
}
));


passport.use('local-signin', new LocalStrategy({
  usernameField: 'Dni',
  passwordField: 'Password',
  passReqToCallback: true
}, async (req, Dni, Password, done) => {
  const user = await User.findOne({Dni:Dni});
  if (!user) {
    console.log('No Existe Usuario con ese Dni')
    return done(null, false, req.flash('signinMessage', 'No Existe Usuario con eses Dni'));
  }
  if (user.Password != Password) {
    console.log('Contraseña Incorrecta')
    return done(null, false, req.flash('signinMessage', 'Contraseña Incorrecta'));
  }
  const myDni = localStorage.setItem('myDni', Dni);
  console.log(localStorage.getItem('myDni'));
  return  done(null, user);
}));



