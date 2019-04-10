const { Router } = require('express')
const router = Router();

const _ = require('underscore');

const EstadoCivil = require('../models/Reniec');

//const EstadoCivil = require('../reniec.json');

router.get('/', async (req, res) => {
    const estadocivil = await EstadoCivil.find();
    res.json(estadocivil);
});

router.post('/', async (req, res) => {
    const { Nombres, Apellidos, FechaNacimiento, DNI, LugarNacimiento, Domicilio, Profesion } = req.body;
    if (Nombres && Apellidos && FechaNacimiento && DNI && LugarNacimiento && Domicilio && Profesion) {
        //const id = movies.length + 1;
        const newEstadoCivil = new EstadoCivil({ ...req.body });
        //EstadoCivil.push(newEstadoCivil);
        await newEstadoCivil.save();
        res.json({message: "Registro agregado"});
    }
    else {
        res.status(500).json({ error: "Un error ah ocurrido" });
    }
    
});

module.exports = router;
