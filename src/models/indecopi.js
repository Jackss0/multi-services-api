const { Router } = require('express');
const { Schema, model } = require('mongoose');
const router = Router();

const MarcaProductoSchema = new Schema({
    Solicitante: { type: String, required: true },
    Tipo: { type: String, required: true },
    RazonSocial: { type: String, required: true },
    DNI: { type: String, required: true },
    RUC: { type: String, required: true },
    Nacionalidad: { type: String, required: true },
    Domicilio: { type: String, required: true },
    Email: { type: String, required: true },
    Telefono: { type: String, required: true }
},
    {versionKey:false}
);


module.exports = model('MarcaProducto', MarcaProductoSchema);


