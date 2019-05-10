const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const AntecedentesPenalesSchema = new Schema({
    Nombres: { type: String, required: true },
    Apellidos: { type: String, required: true },
    Dni: { type: String, required: true },
    Antecedentes: { type: String, required: true },
    Razon: { type: String, required: true },
    Fecha: { type: String, required: true }
},
    {versionKey:false}, { collection: 'AntecedentesPenales' }
);

const inpedb = mongoose.connection.useDb('inpe');

module.exports = inpedb.model('AntecedentesPenales', AntecedentesPenalesSchema);


