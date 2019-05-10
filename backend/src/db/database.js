const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/reniec', {
    useNewUrlParser: true
})
    .then(db => console.log('reniec DB is connected'))
    .catch(err => console.error(err));

mongoose.createConnection('mongodb://localhost/inpe', {
    useNewUrlParser: true
})
    .then(db => console.log('inpe DB is connected'))
    .catch(err => console.error(err));

mongoose.createConnection('mongodb://localhost/pnp', {
    useNewUrlParser: true
})
    .then(db => console.log('pnp DB is connected'))
    .catch(err => console.error(err));

mongoose.createConnection('mongodb://localhost/poder_judicial', {
    useNewUrlParser: true
})
    .then(db => console.log('poder_judicial DB is connected'))
    .catch(err => console.error(err));