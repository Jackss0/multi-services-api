const mongoose = require('mongoose');


mongoose.createConnection('mongodb://localhost/reniec5',{
    useNewUrlParser: true
})
.then(db => console.log('reniec5 DB is connected'))
.catch(err =>console.error(err));

mongoose.createConnection('mongodb://localhost/indecopi5',{
    useNewUrlParser: true
})
.then(db => console.log('indecopi5 DB is connected'))
.catch(err =>console.error(err));

mongoose.createConnection('mongodb://localhost/inpe5',{
    useNewUrlParser: true
})
.then(db => console.log('inpe5 DB is connected'))
.catch(err =>console.error(err));