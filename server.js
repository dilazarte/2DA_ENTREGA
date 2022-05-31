const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const {routerProductos} = require('./src/Routes/productosRoute')
const {routerCarrito} = require('./src/Routes/carritosRoute')

app.use('/api/productos', routerProductos);
app.use('/api/carrito', routerCarrito);
app.use( (req, res) =>{ //ruta 404
    res.status(404).json({Error: `Ruta ${req.originalUrl} no encontrada` });
});

const PORT = process.env.PORT || 8080;
//server on
const server = app.listen(8080, ()=>{
    console.log(`Server listening on port ${PORT}`)
})