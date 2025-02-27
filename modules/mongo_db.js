require("dotenv").config()
const MongoClient = require("mongodb").MongoClient

let db_url = process.env.NODE_ENV == "production" ? process.env.DATABASE_URL : process.env.TEST_DATABASE_URL
let db_name = process.env.NODE_ENV == "production" ? process.env.DATABASE_NAME : process.env.TEST_DATABASE_NAME

let db
let client
try {
    client = new MongoClient(db_url)
    db = client.db(db_name)
    console.log("Connection to database established !")
}
catch (err) {
    console.log("Cannot connect to database : ", err)
}

module.exports = db
module.exports.client = client