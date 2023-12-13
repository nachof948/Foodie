const express = require('express')
const router = express.Router()
const passport = require('passport')


router.get('/error', (req, res) => {
    res.status(401).json({message:"Error al registarse"})
})

router.get('/exito', (req, res) => {
  if (req.isAuthenticated()) {
    // Usuario autenticado, devuelve la respuesta deseada
    res.status(200).send({
      success: true,
      message: "Esto esta funcionando",
      user: req.user
    });
  } else {
    // No hay usuario autenticado, devuelve un mensaje de error
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
router.get('/google/redirect', passport.authenticate('google', {
    successRedirect: 'https://restaurant-foodied.onrender.com/',
    failureRedirect: '/error' // Opcional: Redirección en caso de fallo en la autenticación
}));



module.exports = router