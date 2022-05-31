const {ContenedorFirebase} = require('../../Contenedores/contenedorFirebase')


class DaoCarritoFirebase extends ContenedorFirebase{
    constructor(){
        super('carritos')
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
            // let cartsArray = await this.getAllCarts();
            const cartById = await this.getDocById(cartID)
            let cartProds = cartById.productos
            cartProds.push(prod)
            let productos = {productos: cartProds}
            let data = await this.updateDoc(cartID, productos)
            return data
        }
        catch(error){
            return error
        }
    }

    async deleteProdOnCartById(idCart, idProd){
        try{
            let cartID = await this.getDocById(idCart);

            const productosCart = cartID.productos;
            const newCart = productosCart.filter(elem => elem.id != idProd)
            let newData = {productos: newCart}
            let updateCart = await this.updateDoc(idCart, newData)
            return updateCart
        }
        catch(error){
            return error
        }
    }
}

module.exports = {DaoCarritoFirebase};