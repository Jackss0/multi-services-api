const express = require('express')
const app = express()
const morgan = require('morgan')

//db init
require('./db/database');

//settings
app.set('port', process.env.PORT || 3000)
app.set('json spaces',2)

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//routes
app.use('/api/reniec',require('./routes/Reniec/reniec'))
app.use('/api/inpe/antecedentes',require('./routes/Inpe/inpe'))
app.use('/api/inpe/prueba1',require('./routes/Inpe/PruebaRoute'))

//server up
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
});



