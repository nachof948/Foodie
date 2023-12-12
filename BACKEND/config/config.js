const GoogleStrategy = require('passport-google-oauth20').Strategy;
const ClienteGoogle = require('../models/Usuario-Google')
const passport = require('passport')
require('dotenv').config()


passport.serializeUser((usuario, done)=>{
    done(null, usuario)
})
passport.deserializeUser((usuario, done)=>{
    done(null, usuario)
})


passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:"https://restaurante-foodied.onrender.com/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) =>{
        try{
            const usuarioRegistrado = await ClienteGoogle.findOne({googleId: profile.id})
            if(usuarioRegistrado){
                console.log('Este es el usuario:' + usuarioRegistrado)
                done(null, usuarioRegistrado)
            } else{
                const usuario = await new ClienteGoogle({
                    googleId: profile.id,
                    username: profile.displayName,
                    image:profile.photos[0].value
                }).save()
                console.log(usuario)
                done(null, usuario)
            }
        } catch(error){
            done(null, error)
        }
    }
))  
