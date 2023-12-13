const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const ClienteGoogle = require('../models/Usuario-Google')
require('dotenv').config()


passport.serializeUser((user, done)=>{
    done(null, user)
})
passport.deserializeUser((user, done)=>{
    done(null, user)
})


passport.use(new GoogleStrategy({
    clientID:'765095277311-hnbmb73bhfrconmjsjtf3g91pq178nq4.apps.googleusercontent.com',
    clientSecret:'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',
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
                    image:profile.photos[0].value,
                    token: accessToken
                }).save()
                console.log(usuario)
                done(null, usuario)
            }
        } catch(error){
            done(null, error)
        }
    }
))  
