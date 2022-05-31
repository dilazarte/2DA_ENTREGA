let admin = require("firebase-admin");
const {config} =  require('../../config');

admin.initializeApp({
    credential: admin.credential.cert(config.fireBase)
});

const db = admin.firestore();

class ContenedorFirebase{
    constructor(collectionName){
        this.collection = db.collection(collectionName);
    }

    async getDocById(id){
        try {
            const doc = this.collection.doc(`${id}`);
            const data = await doc.get();
            const itemData = data.data();
            return {id, ...itemData};
        } catch (error) {
            return error
        }
    }
    async addDoc(obj){
        try {
            let doc = this.collection.doc();
            obj.timeStamp = Date.now()
            let newItem = await doc.create(obj)
            return doc.id;
        } catch (error) {
            return error
        }
    }
    //todos
    async getAllDoc(){
        try {
            const data = await this.collection.get();
            let docs = data.docs;
            const listItems = docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            return listItems;
        } catch (error) {
            return error
        }
    }
    
    async updateDoc(id, data){
        try {
            const itemUpdate = await this.collection.doc(`${id}`).update(data);
            return itemUpdate
        } catch (error) {
            return error
        }
    }

    async deleteDoc(id){
        try {
            const doc = this.collection.doc(`${id}`);
            const itemDeleted = doc.delete();
            return itemDeleted;
        } catch (error) {
            return error
        }
    }
}

module.exports = {ContenedorFirebase}