require("dotenv").config()
const express = require("express")
const session = require("express-session")

const app = express()

app.set("view engine", "ejs")
app.set("views", "views")
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        path: "/",
        httpOnly: true
    }
}))

app.use("/", require("../routes/home"))

module.exports = app