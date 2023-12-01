const Compra = require('../models/Compra')
const Comidas= require('../models/Comidas')

const mostrarCarrito= async(req, res) => { 
    try{
        if(req.user){
            const carritoUsuario = await Compra.find({usuario: req.user._id})
            /* Si el usuario tiene elementos en su carrito, se muestra la "notificacion" */
            if(carritoUsuario && carritoUsuario.length > 0){
                res.send({carrito:carritoUsuario, user:req.user})
            }
            /* Si el usuario no tiene elementos dentro del carrito, no se muestra la "notificacion" */
            else{
                res.send({carrito:[], user:req.user})
            }
            /* Si el usuario no esta logueado, no se muestra la "notificacion" */
        } else{
            res.send({carrito:[], user:null})
        }
    } catch(err){
        res.status(404).send('error: ' + err);
    }
}

/* AGREGAR PRODUCTOS AL CARRITO */
const agregarProductos = async (req, res) => {
    const productoId = req.body.productoId; // Se recibe el ID del producto a agregar
    try {
        const usuarioId = req.user._id;

        // Buscamos el carrito del usuario
        let carritoUsuario = await Compra.findOne({ usuario: usuarioId });

        // Si el usuario no tiene un carrito, creamos uno nuevo para el mismo
        if (!carritoUsuario) {
            carritoUsuario = new Compra({ usuario: usuarioId, items: [] });
        }

        // Buscamos el producto por su ID
        const productoEnCarrito = carritoUsuario.items.find(item => item.producto.toString() === productoId);

        if (productoEnCarrito) {
            // Si el producto ya está en el carrito, podrías aumentar la cantidad o realizar alguna acción adicional
            // Por ejemplo, aumentar la cantidad en 1:
            productoEnCarrito.cantidad += 1;
        } else {
            // Si el producto no está en el carrito, lo agregamos buscando por su ID
            const productoEncontrado = await Comidas.findById(productoId);
            if (productoEncontrado) {
                carritoUsuario.items.push({
                    producto: productoId,
                    nombre: productoEncontrado.nombre,
                    imagen: productoEncontrado.imgUrl,
                    cantidad: 1,
                    precio: productoEncontrado.precio
                });
            } else {
                return res.status(404).json({ mensaje: "El producto no fue encontrado" });
            }
        }

        // Guardamos el carrito actualizado
        await carritoUsuario.save();
        res.redirect('/compras');
    } catch (error) {
        return res.status(500).json({ mensaje: "Error interno del servidor", error: error.message });
    }
};
const restarProductos = async (req, res) => {
    const nombre = req.body.nombre;

    try {
        const productoEnCarrito = await Compra.findOne({ nombre });

        if (productoEnCarrito) {
            if (productoEnCarrito.cantidad < 2) {
                // Usar findByIdAndRemove en lugar de findOneAndDelete
                await Compra.findByIdAndRemove(productoEnCarrito._id);
            } else {
                // Usar productoEnCarrito._id en lugar de id
                await Compra.findByIdAndUpdate(productoEnCarrito._id, { cantidad: productoEnCarrito.cantidad - 1 });
                productoEnCarrito.cantidad -= 1;
                await productoEnCarrito.save();
            }
        }

        // Redirigir después de la operación de base de datos
        res.redirect('/compras');
    } catch (error) {
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
};





/* ELIMINAR PRODUCTO DEL CARRITO */
const eliminarProductos = async (req, res) => {
    const idProducto = req.params.id;
    const usuarioId = req.user._id;

    try {
        const carritoUsuario = await Carrito.findOneAndUpdate(
            { usuario: usuarioId },
            { $pull: { items: { _id: idProducto } } },
            { new: true }
        );

        if (carritoUsuario) {
            // Verificar si el carrito está vacío
            if (carritoUsuario.items.length === 0) {
                // Si el carrito está vacío, eliminar el documento completo del carrito
                await Carrito.findOneAndRemove({ usuario: usuarioId });
                res.redirect('/compras');
            } else {
                // Si el carrito no está vacío, redirigir a la página de compras
                res.redirect('/compras');
            }
        } else {
            res.status(404).send('No se encontró el carrito del usuario');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el producto del carrito');
    }
};

module.exports ={
    mostrarCarrito,
    agregarProductos,
    restarProductos,
    eliminarProductos,
}