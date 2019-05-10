const { Router } = require('express')
const router = Router();

const _ = require('underscore');

const Indecopi = require('../models/Indecopi');

//const EstadoCivil = require('../reniec.json');

router.get('/', async (req, res) => {
    const indecopi = await Indecopi.find();
    res.json(indecopi);
});

router.post('/', async (req, res) => {
    const { Solicitante, Tipo, RazonSocial, DNI, RUC, Nacionalidad, Domicilio, Email, Telefono } = req.body;
    if (Solicitante && Tipo && RazonSocial && DNI && RUC && Nacionalidad && Domicilio && Email && Telefono) {
        //const id = movies.length + 1;
        const newIndecopi = new Indecopi({ ...req.body });
        //EstadoCivil.push(newEstadoCivil);
        await newIndecopi.save();
        res.json({message: "Registro agregado"});
    }
    else {
        res.status(500).json({ error: "Un error ah ocurrido" });
    }
    
});

module.exports = router;