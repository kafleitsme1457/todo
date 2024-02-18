const { log } = require('console')
const express= require('express')
const http = require('http')
require('dotenv').config()
var port = process.env.PORT

const app = express()
const router = require('./route')
app.use("/", (req,res)=>{
    res.json({message:"Home Page"})
})


const server = http.createServer(app)
server.listen(port,()=>{
    console.log("server is running in localhost:"+port);
})