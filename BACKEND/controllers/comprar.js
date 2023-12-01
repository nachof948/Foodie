const Compra = require('../models/Compra')
const compra = async(req,res)=>{
    try{
        const usuarioId = req.user._id;

        // Encontrar y eliminar solo el carrito del usuario actual
        await Compra.findOneAndRemove({ usuario: usuarioId });

        console.log('Elementos del carrito eliminados para el usuario:', usuarioId);

        res.render('compra');
    }
    catch(err){
        res.status(500).send('Error interno del servidor');
    }
}

module.exports = { 
    compra
}