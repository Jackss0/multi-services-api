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
app.use('/api/reniec',require('./routes/reniec'))
app.use('/api/indecopi',require('./routes/indecopi'))
app.use('/api/inpe/antecedentes',require('./routes/inpe'))
app.use('/api/inpe/test',require('./routes/inpe'))

//server up
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
});



