const { Router } = require('express')
const router = Router();

const _ = require('underscore');

const Inpe = require('../../models/Pnp/AntecedentesPoliciales.js');


router.get('/:dni', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");//necesario para poder hacer la llamada al endpoint desde la UI
    const { dni } = req.params;
    const result = await Inpe.findOne({ "Dni": dni })
    console.log(result);
    res.json(result);
});


router.get('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const inpe = await Inpe.find();
    console.log(inpe)
    res.json(inpe);
});

module.exports = router;