const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const Prueba1Schema = new Schema({
    Nombres: { type: String, required: true },
    Apellidos: { type: String, required: true }
},
    {versionKey:false}, { collection: 'prueba1' } // quitamos un campo que mongodb coloca por defecto y nombramos el nombre de la tabla(en mongodb se les dice collection)
);


//variable con la se que conecta a la bd
const inpedb = mongoose.connection.useDb('inpe');
//exportando el modelo para que sea usado
module.exports = inpedb.model('prueba1', Prueba1Schema); //('Nombre de la tabla con la que se guardara en la bd','Schema o Modelo')