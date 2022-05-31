const {ContenedorFirebase} = require('../../Contenedores/contenedorFirebase')


class DaoProductosFirebase extends ContenedorFirebase{
    constructor(){
        super('productos')
    }
}

module.exports = {DaoProductosFirebase};