require('dotenv').config();
//Configuracion de bases de datos.-

//let tt = JSON.parse(process.env.FIREBASE_CONFIG)

const config = {
    //filesystem => archivo json.-
    FS: './data',

    //mongo
    MongoURL: process.env.MONGO_URI,

    //firebase
    fireBase: {
        "type": process.env.TYPE_ACC,
        "project_id": process.env.PROJECT_ID,
        "private_key_id": process.env.PRIVATE_ID_KEY,
        "private_key": process.env.PRIVATE_KEY,
        "client_email": process.env.CLIENT_EMAIL,
        "client_id": process.env.CLIENT_ID,
        "auth_uri": process.env.AUTH_URI,
        "token_uri": process.env.TOKEN_URI,
        "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER,
        "client_x509_cert_url": process.env.CLIENT_CERT_URI
    }
}

module.exports = {config}