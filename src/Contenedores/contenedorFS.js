const fs = require('fs');
const {config} = require('../../config')

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

class ContenedorFS{
    constructor(dataFile){
        this.ruta = `${config.FS}/${dataFile}`
    }
    async saveInFile(content) {
        fs.promises.writeFile(this.ruta, JSON.stringify(content, null,'\t'));
    }
    async getAll(){
        let array = []
        try{
            let data = await fs.promises.readFile(this.ruta, 'utf-8')
            array = JSON.parse(data)
        }
        catch(error){
            this.saveInFile(array)
            console.log(`Se creo archivo ${this.ruta}`)
        }
        return array
    }
    async save(object){
        try{
            let array = await this.getAll() //obtengo datos de mi json
            let autoId = idAuto(array)
            object.id = autoId
            object.timeStamp =  Date.now()
            array.push(object)
            await fs.promises.writeFile(this.ruta, JSON.stringify(array))
            return autoId;
        }
        catch(err){
            console.log(err)
        }
    }
    async getById(n){
        try{
            let array = await this.getAll()
            let item = array.filter(el => el.id == n)
            return item[0]
        }
        catch(error){
            console.log(error)
        }
        
    }
    
    async deleteById(n){
        let array = JSON.parse(await fs.promises.readFile(this.ruta, 'utf-8'))
        let newArr = array.filter(el => el.id !== n)
        await fs.promises.writeFile(this.ruta, JSON.stringify(newArr))
    }
    async deleteAll(){
        let newArr = []
        //fs.writeFileSync(this.ruta, JSON.stringify(newArr))
        await fs.promises.writeFile(this.ruta, JSON.stringify(newArr))
    }
    async editById(id, newData){ //testing
        try{
            const {nombre, precio, foto, descripcion, stock, codigo} = newData
            let array = await this.getAll()
            let item = array.find(el => el.id === parseInt(id))
            let index = array.indexOf(item)
            if(item){
                nombre ? array[index].nombre = nombre : array[index].nombre = array[index].nombre
                precio ? array[index].precio = parseInt(precio) : array[index].precio = array[index].precio
                codigo ? array[index].codigo = codigo : array[index].codigo = array[index].codigo
                foto ? array[index].foto = foto : array[index].foto = array[index].foto
                descripcion ? array[index].descripcion = descripcion : array[index].descripcion = array[index].descripcion
                stock ? array[index].stock = parseInt(stock) : array[index].stock = array[index].stock
                
                await fs.promises.writeFile(this.ruta, JSON.stringify(array))
                return `Actualizado el producto con id: ${id}`
            }else{
                return "No existe el producto con ID ingresado"
            }
        }
        catch(error){
            console.log(error)
        }
    }
}
module.exports = {ContenedorFS};