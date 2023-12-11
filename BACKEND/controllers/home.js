const Compra = require('../models/Compra')
const Comidas = require('../models/Comidas')
const redis = require('redis');
const client = redis.createClient();

const home = async (req, res) => {
    try {
        // Intentar obtener los datos desde Redis
        client.get('datosHome', async (err, cachedData) => {
            if (err) throw err;

            if (cachedData !== null) {
                // Si se encuentra en caché, enviar los datos almacenados en Redis
                res.send(JSON.parse(cachedData));
            } else {
                // Si no se encuentra en caché, realizar consultas a la base de datos
                const compra = await Compra.find({});
                const comidas = await Comidas.find({});

                // Almacenar en Redis los resultados de las consultas con un tiempo de expiración
                const dataToCache = { compra, comidas };
                client.set('datosHome', 864000,'EX', JSON.stringify(dataToCache));

                // Enviar los resultados de las consultas al cliente
                res.send(dataToCache);
            }
        });
    } catch (error) {
        res.status(500).send('No se encontraron las comidas');
    }
};

module.exports = { home };
