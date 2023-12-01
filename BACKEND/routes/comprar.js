const express = require('express');
const router = express.Router();


const { compra } = require('../controllers/comprar');

router.route('/compra-realizada').post(compra)

module.exports = router;
