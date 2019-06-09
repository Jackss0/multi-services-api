const { Router } = require('express');
const router = Router();
const passport = require('passport');

const _ = require('underscore');

const Users = require('../../models/Users/Users');

if (typeof localStorage === "undefined" || localStorage === null) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

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
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: 'http://localhost:4000/LandingPageUser',
    failureRedirect: 'http://localhost:4000/RegisterPage',
    failureFlash: true
}));

//Login
router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: 'http://localhost:4000/LandingPageUser',
    failureRedirect: 'http://localhost:4000/LoginPage',
    failureFlash: true
}));

router.post('http://localhost:4000/LandingPageUser',isAuthenticated, (req, res, next) => {
    res.render('profile');
  });

router.post('/logout', (req, res, next) => {
    req.logout();
    res.redirect('http://localhost:4000/');
});

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
    res.redirect('http://localhost:4000/LoginPage')
  }


module.exports = router;