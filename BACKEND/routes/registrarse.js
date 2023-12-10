const express = require('express')
const router = express.Router()
const passport = require('passport')


router.get('/error', (req, res) => {
    res.status(401).json({message:"Error al registarse"})
})

router.get('/exito', (req, res) => {
    res.json({message: 'el usuario es:'+ req.user})
    if(req.user){
        res.status(200).json({
            success: true,
            message:"Exito al registrase",
            user:{
                username: req.user.username,
                image:req.user.image}
        })
    }
})

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