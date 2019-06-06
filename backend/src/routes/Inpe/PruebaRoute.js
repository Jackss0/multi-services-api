const { Router } = require('express')
const router = Router();

const _ = require('underscore');

const Inpe = require('../../models/Inpe/Prueba');

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

router.post('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { Nombres, Apellidos } = req.body;
    if (Nombres && Apellidos ) {
        const newInpe = new Inpe({ ...req.body });
        await newInpe.save();
        res.json({ message: "Registro agregado" });
    }
    else {
        res.status(500).json({ error: "Un error ah ocurrido" });
    }

});

module.exports = router;