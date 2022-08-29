const { response } = require('express')
const express =require('express')
require('dotenv').config()
const app = express()

app.get('/', (req,res)=> {
    res.send('Hello World of HeROKU')
})

app.listen(process.env.PORT)
