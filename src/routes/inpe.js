const { Router } = require('express')
const router = Router();

const _ = require('underscore');

const Inpe = require('../models/Inpe');

//const EstadoCivil = require('../reniec.json');

router.get('/', async (req, res) => {
    const inpe = await Inpe.find();
    res.json(inpe);
});

router.post('/', async (req, res) => {
    const { Nombres, Apellidos, Antecedentes, Razon, Fecha } = req.body;
    if (Nombres && Apellidos && Antecedentes && Razon && Fecha ) {
        //const id = movies.length + 1;
        const newInpe = new Inpe({ ...req.body });
        //EstadoCivil.push(newEstadoCivil);
        await newInpe.save();
        res.json({message: "Registro agregado"});
    }
    else {
        res.status(500).json({ error: "Un error ah ocurrido" });
    }
    
});

module.exports = router;