const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const EstadoCivilSchema = new Schema({
    Nombres: { type: String, required: true },
    Apellidos: { type: String, required: true },
    FechaNacimiento: { type: Date, required: true },
    DNI: { type: String, required: true },
    LugarNacimiento: { type: String, required: true },
    Domicilio: { type: String, required: true },
    Profesion: { type: String, required: true }
},
    { versionKey: false }
);

const reniecdb = mongoose.connection.useDb('reniec5');

module.exports = reniecdb.model('EstadoCivil', EstadoCivilSchema, 'EstadoCivil');

