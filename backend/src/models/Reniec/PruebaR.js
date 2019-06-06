const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const Prueba2Schema = new Schema({
    Nombres: { type: String, required: true },
    Apellidos: { type: String, required: true }
},
    {versionKey:false}, { collection: 'pruebar' } // quitamos un campo que mongodb coloca por defecto y nombramos el nombre de la tabla(en mongodb se les dice collection)
);


//variable con la se que conecta a la bd
const inpedb = mongoose.connection.useDb('reniec');
//exportando el modelo para que sea usado
module.exports = inpedb.model('pruebar', Prueba2Schema); //('Nombre de la tabla con la que se guardara en la bd','Schema o Modelo')