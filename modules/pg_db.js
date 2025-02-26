const { Pool } = require("pg")

let config = process.env.NODE_ENV == "production" ? {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
} : {
    connectionString: process.env.TEST_DATABASE_URL,
    ssl: false
}

let db
try {
    db = new Pool(config)
    await db.connect()
    console.log("Connection to database established !")
}
catch (err) {
    console.log("Cannot connect to database : ", err)
}

module.exports = db