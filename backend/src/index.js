const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');


//db init
const app = express();
require('./db/database');
require('./passport/local-auth');

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.user = req.user;
    console.log(app.locals)
    next();
});

//routes
app.use('/api/reniec', require('./routes/Reniec/reniec'));
app.use('/api/reniec/actanacimiento', require('./routes/Reniec/ActaNacimientoRoute'));
app.use('/api/users', require('./routes/Users/Users'));
app.use('/api/inpe/antecedentespenales', require('./routes/Inpe/AntecedentesPenalesRoute'));
app.use('/api/pnp/antecedentespoliciales', require('./routes/Pnp/AntecedentesPolicialesRoutes'));




//server up
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});



