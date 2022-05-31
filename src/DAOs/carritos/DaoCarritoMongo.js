const {ContenedorMongoDB} = require('../../Contenedores/contenedorMongoDB')
//const productoModel = require('../../Modelos/productosMongo')

class DaoCarritoMongo extends ContenedorMongoDB{
    constructor(){
    const productoModel = require('../../Modelos/carritoMongo')
        super(productoModel)
    }

    async getAllCarts(){
        let carts = await this.getAllDoc();
        return carts;
    }

    async createCart(){
        try{
            let newCarrito = {
                productos: []
            }
            let newCart = await this.addDoc(newCarrito)
            return newCart;
        }
        catch(err){
            console.log(err)
        }
    }

    async addToCart(cartID, prod){
        try{
            let cartsArray = await this.getAllCarts();
            let cartById = cartsArray.filter(el => el._id == cartID);
                if(cartById.length > 0) {
                    let prods = cartById[0].productos;
                    prods.push(prod[0])
                    let productos = {productos: prods}
                    let data = await this.updateDoc(cartID, productos)
                    return data
                }else{
                    return 'Error'
                }
        }
        catch(error){
            return error
        }
    }

    async deleteProdOnCartById(idCart, idProd){
        try{
            let cartID = await this.getDocById(idCart);

            const productosCart = cartID[0].productos;
            const newCart = productosCart.filter(elem => elem._id != idProd)
            let newData = {productos: newCart}
            let updateCart = await this.updateDoc(idCart, newData)
            return updateCart
        }
        catch(error){
            return error
        }
    }
}

module.exports = {DaoCarritoMongo};