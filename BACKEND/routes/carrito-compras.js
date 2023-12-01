const express = require('express');
const router = express.Router();

const { mostrarCarrito, agregarProductos, restarProductos, eliminarProductos } = require('../controllers/carrito-compras');

router.get('/', mostrarCarrito)


router.post('/agregar', agregarProductos);

router.post('/restar', restarProductos);

router.get('/eliminar/:id', eliminarProductos);


module.exports = router;