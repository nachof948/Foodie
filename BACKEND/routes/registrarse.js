const express = require('express')
const router = express.Router()
const passport = require('passport')


router.get('/error', (req, res) => {
    res.status(401).json({message:"Error al registarse"})
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

router.get('/exito', (req, res) => {
    if (req.isAuthenticated()) {
      // Usuario autenticado, devuelve la respuesta deseada
      res.status(200).send({
        success: true,
        message: "Esto esta funcionando",
        user: {
          username: req.user.username,
          image: req.user.image
        }
      });
    } else {
      // No hay usuario autenticado, devuelve un mensaje de error
      res.status(401).json({
        success: false,
        message: "No se encontró usuario registrado"
      });
    }
  });
  

module.exports = router