const { Router } = require('express');
const router = Router();
const passport = require('passport');

const _ = require('underscore');

const Users = require('../../models/Users/Users');

//BUSQUEDA POR DNI
router.get('/:dni', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");//necesario para poder hacer la llamada al endpoint desde la UI
    const { dni } = req.params;
    const result = await Users.findOne({ "Dni": dni })
    console.log(result);
    res.json(result);
});


router.get('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const inpe = await Users.find();
    console.log(inpe)
    res.json(inpe);
});



// REGISTRAR
router.post('/signup', passport.authenticate( 'local-signup', {
    successRedirect: 'http://localhost:4000/',
    failureRedirect: 'http://localhost:4000/RegisterPage'
}));




module.exports = router;