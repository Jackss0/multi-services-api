const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/Users/Users')

passport.serializeUser((user, done) => {  
    done(null, user.Dni);
});

passport.deserializeUser(async (Dni, done) => {  
    const user = await User.findById(Dni);
    done(null,user)
});


//Registrar
passport.use('local-signup', new LocalStrategy({
    usernameField: 'Dni',
    passwordField: 'Password',
    passReqToCallback: true
},async (req, Dni, Password, done)=>{
    const newUser = new User();
    newUser.Nombres=req.body.Nombres;
    newUser.Apellidos=req.body.Apellidos;
    newUser.Dni=Dni;
    newUser.Cui=req.body.Cui;
    newUser.Password=Password;
    console.log(newUser)
    await newUser.save();
    done(null, newUser);
}
));


passport.use('local-signin', new LocalStrategy({
    usernameField: 'Dni',
    passwordField: 'Password',
    passReqToCallback: true
  }, async (req, Dni, Password, done) => {
    const user = await User.findOne({email: email});
    if(!user) {
      return done(null, false, req.flash('signinMessage', 'No Existe Usuario con eses Dni'));
    }
    if(!user.comparePassword(password)) {
      return done(null, false, req.flash('signinMessage', 'Contraseña Incorrecta'));
    }
    return done(null, user);
  }));



