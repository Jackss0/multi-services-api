const express = require('express')
const app = express()
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session')


//db init
require('./db/database');
require('./passport/local-auth');

//settings
app.set('port', process.env.PORT || 3000)
app.set('json spaces',2)

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(session({
    secret: 'mysecretsession',
    resave:false,
    saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.session())

//routes
app.use('/api/reniec',require('./routes/Reniec/reniec'))
app.use('/api/users',require('./routes/Users/Users'))
app.use('/api/inpe/antecedentes',require('./routes/Inpe/inpe'))
app.use('/api/inpe/prueba1',require('./routes/Inpe/PruebaRoute'))
app.use('/api/reniec/prueba2',require('./routes/Reniec/PruebaRoute.js'))

//server up
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
});



