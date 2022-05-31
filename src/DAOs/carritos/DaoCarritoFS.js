const fs = require('fs')
const {ContenedorFS} = require('../../Contenedores/contenedorFS')

const {DaoProductosFS} = require('../../../src/DAOs/productos/DaoProductosFS')
const DaoProdFS = new DaoProductosFS()

const idAuto = (array) => {
    let autoId = array.length + 1;
    if (array.length === 0) {
        autoId = 1;
    }
    else {
        while (true) {
            if (!array.indexOf(autoId)) {
                autoId = autoId + 1;
            } else {
                break;
            }
        }
    }
    return autoId;
};

class DaoCarritoFS extends ContenedorFS{
    constructor(){
        super('carritos.json')
    }
    async getAllCarts(){
        let carts = await this.getAll();
        return carts;
    }

    async createCart(){
        try{
            let array = await this.getAllCarts()
            let autoId = idAuto(array)
            let newCarrito = {
                id: autoId,
                timeStamp: Date.now(),
                productos: []
            }
            array.push(newCarrito)
            await fs.promises.writeFile(this.ruta, JSON.stringify(array))
            return autoId;
        }
        catch(err){
            console.log(err)
        }
        
    }

    async addToCart(cartID, prod){
        try{
            let cartsArray = await this.getAllCarts();
            let cartById = cartsArray.filter(el => el.id == cartID);
                if(cartById.length > 0) {
                    cartById[0].productos.push(prod);
                    await fs.promises.writeFile(this.ruta, JSON.stringify(cartsArray));
                    return true
                }else{
                    return false
                }
            
        }
        catch(error){
            return error
        }
    }

    async deleteProdOnCartById(idCart, idProd){
        try{
            let cartsArray = await this.getAllCarts();
            let i = cartsArray.findIndex( el => el.id === idCart );
                if(i >= 0){
                    let i_prod = cartsArray[i].productos.findIndex( el => el.id === idProd );
                        if(i_prod >= 0 ){
                            let newArrProds = cartsArray[i].productos.filter(elems => elems.id !== idProd);
                            cartsArray[i].productos = newArrProds;
                            await fs.promises.writeFile(this.ruta, JSON.stringify(cartsArray));
                            return `Producto con ID ${idProd} borrado correctamente`
                        }else{
                            return `No se encontro el producto con ID ${idProd}`
                        }
                }else{
                    return `No se encontro el carrito con ID ${idCart}`
                }    
        }
        catch(error){
            return error
        }
    }
}

module.exports = {DaoCarritoFS};