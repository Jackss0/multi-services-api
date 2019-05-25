const { Router } = require('express')
const router = Router();

const _ = require('underscore');

const EstadoCivil = require('../models/Reniec/EstadoCivil');

router.get('/dni:', async (req, res) => {
    const { dni } = req.params;
    _.each(estadocivil, (EstadoCivil) => {
        if (EstadoCivil.dni == dni) {
            estadocivil.find(dni);
        }
    })
    res.json(estadocivil);
});

router.get('/', async (req, res) => {
    const estadocivil = await EstadoCivil.find();
    res.json(estadocivil);
});

router.post('/', async (req, res) => {
    const { Nombres, Apellidos, FechaNacimiento, DNI, LugarNacimiento, Domicilio, Profesion } = req.body;
    if (Nombres && Apellidos && FechaNacimiento && DNI && LugarNacimiento && Domicilio && Profesion) {
        const newEstadoCivil = new EstadoCivil({ ...req.body });
        await newEstadoCivil.save();
        res.json({ message: "Registro agregado" });
    }
    else {
        res.status(500).json({ error: "Un error ah ocurrido" });
    }

});

module.exports = router;
