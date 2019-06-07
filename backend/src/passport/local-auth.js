const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const user = require('../models/Users/Users')

passport.serializeUser((user, done) => {  
    done(null, user.dni);
});

passport.deserializeUser(async (dni, done) => {  
    const user = await User.FindById(dni);
    done(null,user)
});


//Registrar
passport.use('local-signup', new LocalStrategy({
    usernameField: 'dni',
    passwordField: 'password',
    passReqToCallback: true
},async (req, dni, password, cui, done)=>{
    const user = new user();
    user.dni=dni;
    user.password=password;
    user.cui=cui;
    await newUser.save();
    done(null,newUser);
}
));



