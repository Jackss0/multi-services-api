const { Router } = require('express')
const router = Router();

const _ = require('underscore');

const Inpe = require('../models/Inpe');


router.get('/:dni', async (req, res) => {
    const { dni } = req.params;
    const result = await Inpe.findOne({"Dni":dni})
    console.log(result);
    res.json(result);
});


router.get('/', async (req, res) => {
    const inpe = await Inpe.find();
    res.json(inpe);
});

router.post('/', async (req, res) => {
    const { Nombres, Apellidos, Antecedentes, Razon, Fecha } = req.body;
    if (Nombres && Apellidos && Antecedentes && Razon && Fecha ) {
        const newInpe = new Inpe({ ...req.body });
        await newInpe.save();
        res.json({message: "Registro agregado"});
    }
    else {
        res.status(500).json({ error: "Un error ah ocurrido" });
    }
    
});

module.exports = router;