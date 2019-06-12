const { Router } = require('express')
const router = Router();

const _ = require('underscore');

const Inpe = require('../../models/Reniec/ActaNacimiento.js');

router.get('/:dni', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");//necesario para poder hacer la llamada al endpoint desde la UI
    const { dni } = req.params;
    const result = await Inpe.findOne({ "Cui": dni })
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
    const { Cui, NroActa, FechaNacimiento, HoraNacimiento, Departamento, Provincia, Distrito, CentroPoblado, Sexo, TitularPreNombres, TitularPrimerApellido, TitularSegundoApellido, PadrePreNombres,
        PadrePrimerApellido, PadreSegundoApellido, PadreTipoDoc, PadreNroDoc, PadreNacionalidad, MadrePreNombres, MadrePrimerApellido, MadreSegundoApellido, MadreTipoDoc, MadreNroDoc, MadreNacionalidad, DireccionDepartamento,
        DireccionProvincia, DireccionCentroPoblado, FechaRegistro, OficinaRegistralDepartamento, OficinaRegistralProvincia, OficinaRegistralDistrito, DeclarantePrimerApellido, DeclaranteSegundoApellido, DeclarantePrenombres, DeclaranteTipoDoc,
        DeclaranteNroDoc, RegistradorCivilPrimerApellido, RegistradorCivilSegundoApellido, RegistradorCivilPrenombres, RegistradorCivilDni, Observaciones, FirmaDeclarante, HuellaDigitalDeclarante, FirmaRegistradorCivil, HuellaDigitalRegistradorCivil } = req.body;
    if (Cui && NroActa && FechaNacimiento && HoraNacimiento && Departamento && Provincia && Distrito && CentroPoblado && Sexo && TitularPreNombres && TitularPrimerApellido && TitularSegundoApellido && PadrePreNombres &&
        PadrePrimerApellido && PadreSegundoApellido && PadreTipoDoc && PadreNroDoc && PadreNacionalidad && MadrePreNombres && MadrePrimerApellido && MadreSegundoApellido && MadreTipoDoc && MadreNroDoc && MadreNacionalidad && DireccionDepartamento &&
        DireccionProvincia && DireccionCentroPoblado && FechaRegistro && OficinaRegistralDepartamento && OficinaRegistralProvincia && OficinaRegistralDistrito && DeclarantePrimerApellido && DeclaranteSegundoApellido && DeclarantePrenombres && DeclaranteTipoDoc &&
        DeclaranteNroDoc && RegistradorCivilPrimerApellido && RegistradorCivilSegundoApellido && RegistradorCivilPrenombres && RegistradorCivilDni && Observaciones && FirmaDeclarante && HuellaDigitalDeclarante && FirmaRegistradorCivil && HuellaDigitalRegistradorCivil) {
        const newInpe = new Inpe({ ...req.body });
        await newInpe.save();
        res.json({ message: "Registro agregado" });
    }
    else {
        res.status(500).json({ error: "Un error ah ocurrido" });
    }

});

module.exports = router;