const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const AntecedentesPolicialesSchema = new Schema({
    _id: {type: String, required: false, default: null},
    CodAnPol: { type: String, required: true },
    Dni: { type: String, required: true },
    fecharegistro:{ type: String, required: true },
    TipoAnPoL:{ type: String, required: true },
    Estado: { type: String, required: true },
    DescripcionAntPol:{ type: String, required: true }
},
    {versionKey:false}, { collection: 'AntecedentesPoliciales' } // quitamos un campo que mongodb coloca por defecto y nombramos el nombre de la tabla(en mongodb se les dice collection)
);


//variable con la se que conecta a la bd
const pnpdb = mongoose.connection.useDb('pnp');
//exportando el modelo para que sea usado
module.exports = pnpdb.model('AntecedentesPoliciales', AntecedentesPolicialesSchema); //('Nombre de la tabla con la que se guardara en la bd','Schema o Modelo')