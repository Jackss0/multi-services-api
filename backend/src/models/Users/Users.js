const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const bcrypt = require('bcrypt-nodejs');

const UsersSchema = new Schema({
    _id: { type: String, required: false, default:null },
    Nombres: { type: String, required: false },
    Apellidos: { type: String, required: false },
    Dni: { type: String, required: true },
    Cui: { type: String, required: false },
    Password: { type: String, required: true }
},
    {versionKey:false}, { collection: 'users' } // quitamos un campo que mongodb coloca por defecto y nombramos el nombre de la tabla(en mongodb se les dice collection)
);

//variable con la se que conecta a la bd
const inpedb = mongoose.connection.useDb('users');

/*
UsersSchema.methods.encryptPassword = (Password) =>{
    return bcrypt.hashSync(Password, bcrypt.genSaltSync(10))
};

UsersSchema.methods.comparePassword = function (Password){
    return bcrypt.compareSync(Password, this.Password)
};*/

//exportando el modelo para que sea usado
module.exports = inpedb.model('users', UsersSchema); //('Nombre de la tabla con la que se guardara en la bd','Schema o Modelo')