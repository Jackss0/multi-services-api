const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const AntecedentesPenalesSchema = new Schema({
    _id: {type: String, required: false, default: null},
    Nombres: { type: String, required: true },
    Apellidos: { type: String, required: true },
    Dni: { type: String, required: true },
    //Al igual que en el Schema AntecedentesPenalesSchema(Modelo) mongodb creara un Id por default para El Array Antecedentes
    Antecedentes: [{Descripcion: String,
                    Fecha: String
    }],
    Razon: { type: String, required: true },
    Fecha: { type: String, required: true }
},
    {versionKey:false}, { collection: 'AntecedentesPenales' } // quitamos un campo que mongodb coloca por defecto y nombramos el nombre de la tabla(en mongodb se les dice collection)
);


//variable con la se que conecta a la bd
const inpedb = mongoose.connection.useDb('inpe');
//exportando el modelo para que sea usado
module.exports = inpedb.model('AntecedentesPenales', AntecedentesPenalesSchema); //('Nombre de la tabla con la que se guardara en la bd','Schema o Modelo')