import express from "express"
import controller from "./controller/controller.js"
import db from "./db.js"

const port = 3000
const app = express()

app.use(express.json())
controller(app,db)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})