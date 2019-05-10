const { Router } = require('express');
const { Schema, model } = require('mongoose');

const MarcaProductoSchema = new Schema({
    Solicitante: { type: String, required: true },
    Tipo: { type: String, required: true },
    RazonSocial: { type: String, required: true },
    Dni: { type: String, required: true },
    Ruc: { type: String, required: true },
    Nacionalidad: { type: String, required: true },
    Domicilio: { type: String, required: true },
    Email: { type: String, required: true },
    Telefono: { type: String, required: true }
},
    {versionKey:false}, { collection: 'MarcaProducto' }
);


module.exports = model('MarcaProducto', MarcaProductoSchema);


