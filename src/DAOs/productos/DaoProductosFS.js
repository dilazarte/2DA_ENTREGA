const {ContenedorFS} = require('../../Contenedores/contenedorFS')


class DaoProductosFS extends ContenedorFS{
    constructor(){
        super('productos.json')
    }
}

module.exports = {DaoProductosFS};