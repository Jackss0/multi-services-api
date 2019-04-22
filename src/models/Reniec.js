const { Router } = require('express');
const { Schema, model } = require('mongoose');
const router = Router();

const EstadoCivilSchema = new Schema({
    Nombres: { type: String, required: true },
    Apellidos: { type: String, required: true },
    FechaNacimiento: { type: Date, required: true },
    DNI: { type: String, required: true },
    LugarNacimiento: { type: String, required: true },
    Domicilio: { type: String, required: true },
    Profesion: { type: String, required: true }
},
    {versionKey:false}
);


module.exports = model('EstadoCivil', EstadoCivilSchema);

