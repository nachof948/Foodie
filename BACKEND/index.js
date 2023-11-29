const express = require('express');
const app = express();
const home = require('./routes/home')
const shop = require('./routes/shop')
const producto = require ('./routes/producto')
const registrarse = require('./routes/registrarse')
require('dotenv').config()
const connectDB = require('./DB/conexion')
const cookieSession = require('cookie-session')
const passport = require('passport')
const cors = require('cors')
const GooglePassport = require('./config/config')
/* UTILIZAR COOKIES */
app.use(cookieSession({
    nombre:'sesion',
    keys:process.env.KEY_COOKIE,
    maxAge:24 * 60 * 60 * 100 /* Un dia */
}))

/* INICIALIZACION DE PASSPORT */
app.use(passport.initialize())
app.use(passport.session())

app.use(
    cors({
    origin:'http://localhost:3000',
    methods:'GET, POST, PUT, DELETE',
    credentials: true
})
)

/* PUERTO */
const PUERTO = process.env.PUERTO

/* RUTA */
app.use('/',home)
app.use('/comidas',shop)
app.use('/', producto)
app.use('/auth', registrarse)


/* CONEXION A LA BASE DE DATOS */
const iniciar = async ()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(PUERTO, ()=>{console.log(`Se inicio el servidor en el http://localhost:${PUERTO}/`)})
    }
    catch(error){
        console.log(error)
    }
}
iniciar()

