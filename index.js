const app = require("./modules/app")
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})