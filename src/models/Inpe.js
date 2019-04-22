const { Router } = require('express');
const { Schema, model } = require('mongoose');
const router = Router();

const AntecedentesPenalesSchema = new Schema({
    Nombres: { type: String, required: true },
    Apellidos: { type: String, required: true },
    DNI: { type: String, required: true },
    Antecedentes: { type: String, required: true },
    Razon: { type: String, required: true },
    Fecha: { type: String, required: true }
},
    {versionKey:false}
);


module.exports = model('AntecedentesPenales', AntecedentesPenalesSchema);


