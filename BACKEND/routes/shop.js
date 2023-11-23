const express = require('express');
const router = express.Router();

const {obtenerTodasLasComidas,
    obtenerTodasLasCarnes,
    obtenerTodasLasEnsaladas,
    obtenerTodosLosSushi,
    obtenerTodasLasPastas,
    obtenerTodasLasPizzas,
    obtenerTodosLosVeganos,
    obtenerTodasLasSopas,
    obtenerTodosLosDulces,
    obtenerTodasLasHamburguesas}= require('../controllers/shop')

/* /comidas/all */
router.route('/all').get(obtenerTodasLasComidas)
/* /comidas/carnes */
router.route('/carnes').get(obtenerTodasLasCarnes)
/* /comidas/ensaladas */
router.route('/ensaladas').get(obtenerTodasLasEnsaladas)
/* /comidas/sushi */
router.route('/sushi').get(obtenerTodosLosSushi)
/* /comidas/pastas */
router.route('/pastas').get(obtenerTodasLasPastas)
/* /comidas/pizzas */
router.route('/pizzas').get(obtenerTodasLasPizzas)
/* /comidas/veganos */
router.route('/veganos').get(obtenerTodosLosVeganos)
/* /comidas/sopas */
router.route('/sopas').get(obtenerTodasLasSopas)
/* /comidas/dulces */
router.route('/dulces').get(obtenerTodosLosDulces)
/* /comidas/hamburguesas */
router.route('/hamburguesas').get(obtenerTodasLasHamburguesas)

module.exports = router