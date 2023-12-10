const express = require('express')
const router = express.Router()
const passport = require('passport')


router.get('/error', (req, res) => {
    res.status(401).json({message:"Error al registarse"})
})

router.get('/exito', (req, res) => {
    if(req.user){
        res.status(200).json({
            success: true,
            message: "Exito al registrarse",
            user: {
                username: req.user.username,
                image: req.user.image
            }
        });
    } else {
        res.status(401).json({
            success: false,
            message: "No se encontró usuario registrado"
        });
    }
});


router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('https://restaurant-foodied.onrender.com/')
})

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));
router.get('/google/callback', passport.authenticate('google', {
    successRedirect: 'https://restaurant-foodied.onrender.com/',
    failureRedirect: '/error' // Opcional: Redirección en caso de fallo en la autenticación
}));

module.exports = router