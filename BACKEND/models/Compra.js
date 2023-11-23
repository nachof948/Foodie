const mongoose = require('mongoose')

const compraSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    imagen:{
        type: String,
        required: true
    },
    cantidad:{
        type: Number,
        required: true
    },
    precio:{
        type: Number,
        required: true
    }
})

const Compra = mongoose.model('Compra', compraSchema)
module.exports = Compra