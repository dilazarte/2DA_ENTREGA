const {ContenedorMongoDB} = require('../../Contenedores/contenedorMongoDB')
const productoModel = require('../../Modelos/productosMongo')

class DaoProductosMongo extends ContenedorMongoDB{
    constructor(){
const productoModel = require('../../Modelos/productosMongo')
        super(productoModel)
    }
}

module.exports = {DaoProductosMongo};