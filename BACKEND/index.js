const express = require('express');
const app = express();
require('dotenv').config()
const connectDB = require('./DB/conexion')



/* PUERTO */
const PUERTO = process.env.PUERTO

/* RUTA */
app.get('/', (req, res) => {
    res.send('<h1>Bienvenidos!</h1>');
})


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

