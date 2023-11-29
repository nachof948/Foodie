const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));
router.get('/google/redirect', passport.authenticate('google', {
    successRedirect: 'http://localhost:3000/',
    failureRedirect: '/login' // Opcional: Redirección en caso de fallo en la autenticación
}));

module.exports = router