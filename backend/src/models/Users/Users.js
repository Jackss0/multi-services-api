const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const bcrypt = require('bcrypt-nodejs');

const UsersSchema = new Schema({
    Nombres: { type: String, required: true },
    Apellidos: { type: String, required: true },
    Dni: { type: String, required: true },
    Cui: { type: String, required: true },
    Password: { type: String, required: true }
},
    {versionKey:false}, { collection: 'users' } // quitamos un campo que mongodb coloca por defecto y nombramos el nombre de la tabla(en mongodb se les dice collection)
);

//variable con la se que conecta a la bd
const inpedb = mongoose.connection.useDb('users');

UsersSchema.methods.encryptPassword = (Password) =>{
    return bcrypt.hashSync(Password, bcrypt.genSaltSync(10))
};

UsersSchema.methods.comparePassword = function (Password){
    return bcrypt.compareSync(Password, this.Contraseña)
};

//exportando el modelo para que sea usado
module.exports = inpedb.model('users', UsersSchema); //('Nombre de la tabla con la que se guardara en la bd','Schema o Modelo')