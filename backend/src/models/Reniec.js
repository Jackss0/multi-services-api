const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EstadoCivilSchema = new Schema({
    Nombres: { type: String, required: true },
    Apellidos: { type: String, required: true },
    FechaNacimiento: { type: Date, required: true },
    Dni: { type: String, required: true },
    LugarNacimiento: { type: String, required: true },
    Domicilio: { type: String, required: true },
    Profesion: { type: String, required: true }
},
    { versionKey: false }, { collection: 'EstadoCivil' }
);

const reniecdb = mongoose.connection.useDb('reniec');

module.exports = reniecdb.model('EstadoCivil', EstadoCivilSchema);

