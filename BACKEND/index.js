const express = require('express');
const app = express();
require('dotenv').config()

/* PUERTO */
const PUERTO = process.env.PUERTO

/* RUTA */
app.get('/', (req, res) => {
    res.send('<h1>Bienvenidos!</h1>');
})


app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}/`)
})