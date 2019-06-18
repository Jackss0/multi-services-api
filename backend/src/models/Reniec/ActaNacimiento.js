const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ActaDeNacimientoSchema = new Schema({
    _id: { type: String, required: false, default:null },
    Cui: { type: String, required: false },
    NroActa: { type: String, required: false },
    FechaNacimiento: { type: String, required: false },
    HoraNacimiento: { type: String, required: false },
    Departamento:{type: String, required: false},
    Provincia:{type: String, required: false},
    Distrito:{type: String, required: false},
    CentroPoblado:{type: String, required: false},
    Sexo:{type: String, required: false},
    TitularPreNombres:{type: String, required: false},
    TitularPrimerApellido:{type: String, required: false},
    TitularSegundoApellido:{type: String, required: false},
    PadrePreNombres:{type: String, required: false},
    PadrePrimerApellido:{type: String, required: false},
    PadreSegundoApellido:{type: String, required: false},
    PadreTipoDoc:{type: String, required: false},
    PadreNroDoc:{type:String,required:false},
    PadreNacionalidad:{type: String, required: false},
    MadrePreNombres:{type: String, required: false},
    MadrePrimerApellido:{type: String, required: false},
    MadreSegundoApellido:{type: String, required: false},
    MadreTipoDoc:{type: String, required: false},
    MadreNroDoc:{type:String,required:false},
    MadreNacionalidad:{type: String, required: false},
    DireccionDepartamento:{type: String, required: false},
    DireccionProvincia:{type: String, required: false},
    DireccionCentroPoblado:{type: String, required: false},
    FechaRegistro:{type: String, required: false},
    OficinaRegistralDepartamento:{type: String, required: false},
    OficinaRegistralProvincia:{type: String, required: false},
    OficinaRegistralDistrito:{type: String, required: false},
    DeclarantePrimerApellido:{type: String, required: false},
    DeclaranteSegundoApellido:{type: String, required: false},
    DeclarantePrenombres:{type: String, required: false},
    DeclaranteTipoDoc:{type: String, required: false},
    DeclaranteNroDoc:{type: String, required: false},
    RegistradorCivilPrimerApellido:{type: String, required: false},
    RegistradorCivilSegundoApellido:{type: String, required: false},
    RegistradorCivilPrenombres:{type: String, required: false},
    RegistradorCivilDni:{type: String, required: false},
    Observaciones:{type: String, required: false},
    FirmaDeclarante:{type: String, required: false},
    HuellaDigitalDeclarante:{type: String, required: false},
    FirmaRegistradorCivil:{type: String, required: false},
    HuellaDigitalRegistradorCivil:{type: String, required: false}
},
    {versionKey:false}, { collection: 'ActaDeNacimiento' } 
);

//variable con la se que conecta a la bd
const reniecbd = mongoose.connection.useDb('reniec');
//exportando el modelo para que sea usado
module.exports = reniecbd.model('ActaDeNacimiento', ActaDeNacimientoSchema); 