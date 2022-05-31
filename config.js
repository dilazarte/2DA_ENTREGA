require('dotenv').config();
//Configuracion de bases de datos.-

//let tt = JSON.parse(process.env.FIREBASE_CONFIG)

const config = {
    //filesystem => archivo json.-
    FS: './data',

    //mongo
    MongoURL: 'mongodb+srv://dilazarte:123456.@cluster0.k7tpv.mongodb.net/?retryWrites=true&w=majority',

    //firebase
    fireBase: {
        "type": "service_account",
        "project_id": "nodejs-tests-94b4b",
        "private_key_id": "fbb2bedd69cfbbd1ec832555f9e6e684ee21b3ed",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQChDZqSLO5Bry3K\nGEAbB+c96xzwT/gIUVHW33H7jw7ff35mCrNlAhCQdX2XsySu8S/NOWbQpwHLk80G\nKlxnBHkIXFOInd4fICEfnNX9ygu7cbJXDf+eCFb79/Pj1ev9UuO+iAFNVe73UgDt\n3LD6eodZ8uAsu0pF00CAFUdnhAzCCgrdi4zZtd1xqDfveglJfhojdE4rFyao/gdd\nfIBkaYjBczRTaY3LixMKi0wM+xSOcbiLjASSMgkCN2Kv8URJqkr0X4zJymTVvFem\nqk2y57Y+iJoArgAtGvecTqDt3N/eTfHVMSGTGmzLYjDsT1m7YKqMu284gWfVjn7K\n8btktrefAgMBAAECggEAEVIIDRoa7OJ89K6YpQTmaCDTJb8b8t0NWvlV5f1+gSfS\nKAGU8H3WhTVgMpfiupPCwHn2EOYydGVAAp6R/cbxM1EmmgXhtQw8s7cncRoGb/wW\nzMj7HtD7yzEL6t//TL5aMuFSmTFu4pdQSpnWSLczu5yPYmV+uTVdIEk+5XxB7lN/\n9+WtGwOzKw5Zzkk6aHJT5++ONvc9QtUNZa9xswKPo1xr3l9/atPjVWQbOEuMKDsU\nBa1fIq+AKIUb01lwm+qJvuxoz3mdEUzNsYWf64FosctYDcOHdUslf7b/hSzFYOuL\naVVcOax/bZvdQQnMXxsOAlkoIGQAhBm+/x0sf7dwOQKBgQDenVP76/TppOfHYyhR\nuBd8po+8gIA6j9ZMl0FtA9qQQu/yqfRoHZbheks2CMTzzcUIoQG0byTBuxFK74eN\nRV3qt9HwvJTymykMJCxREeNAyMDkdToHrz5rC+wWFlTxTRJljPwM/W/nfZJK9o/Z\nXhl22j+/uM5kCK7riXsEaQdBeQKBgQC5NMt0gA7IXj+4pC5jKZ2eCpD2q201/FdC\nkmGr5h2D3NTZt58txHM0PC4rXvs0P0bWqwF3aqL4l7r/llS14ko+x59f2MsmWB8d\nZNFp0yjPNAAfOWr6paj3zV5sZfFs/tqLoGwit/B/Fs+LzSm1chfQ/bFhugn/AhfN\nrYnJF+jT1wKBgFtwFfoJLlz13jo40WvXiNYreCi+Q21KfYSSME594b2VsQdkpb5K\nQRo2aEQ2j+dworjroU6ixF9K3kyAXJY7YtsxS+ttGmUYNGEHTqiyBz0p+IkeWYqk\ngafoir17yMIgnSjXIwSW6OsV2gwugGGRVDZMaRjv6N6P7oFSxBPIrDFJAoGAY2U2\nG5vuUxJh2FIkowtej8bT7c4qmmKG4i91Q7AH/xCxGvc08ncP7OSvUo9y+aNL/UFh\nVBlixU+JCEpBxCth9TdlDSdoP3fjmv7UdJrit/EMb7V8+G+XswYAuuQrIXfVCkJa\nRne5FjvDvx+oVryYk4zTecNCQh15cOTFoaq3RZkCgYEAi5XGRYaT3Cg6hGArqufZ\nahWgfA+IdrzgVUDl2h0SVyP7AanRYnIMbjOu6HuxTIRhe0FEgr+24jGx0ZpnyRPh\nLgLhbfJ2m55ARW9ZoyAFG4Pb3hS6FlGA1OymlhkMcnIUpt2+KUZuTqx7vx7vcgYx\nw6FB+AHpiWjnKJsI2R7NEFU=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-d4zgk@nodejs-tests-94b4b.iam.gserviceaccount.com",
        "client_id": "103131797517459335192",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-d4zgk%40nodejs-tests-94b4b.iam.gserviceaccount.com"
    }
}

module.exports = {config}