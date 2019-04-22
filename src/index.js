const express = require('express')
const app = express();
const morgan = require('morgan');

//db init
require('./db/database');

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2)


//
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());


//rutas
app.use(require('./routes/index'))
//app.use('/api/movies',require('./routes/movies'))
app.use('/api/reniec',require('./routes/reniec'))
app.use('/api/indecopi',require('./routes/indecopi'))
app.use('/api/inpe',require('./routes/inpe'))
//
app.listen(3000, ()=>{
    console.log(`Server on port ${app.get('port')}`);
});



