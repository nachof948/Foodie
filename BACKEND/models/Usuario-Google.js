const mongoose = require('mongoose')

const usuarioGoogleSchema = new mongoose.Schema({
    username:String,
    googleId:String,
    image:String,
    token:String
})

const UsuarioGoogle = mongoose.model('UsuarioGoogle', usuarioGoogleSchema)
module.exports = UsuarioGoogle