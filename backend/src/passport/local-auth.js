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
    const newUser = new user();
    user.Dni=Dni;
    user.Password=Password;
    console.log(newUser)
    await newUser.save();
    done(null, newUser);
}
));



