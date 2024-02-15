const { log } = require('console')
const express= require('express')
const http = require('http')

const app = express()
app.use("/", (req,res)=>{
    res.json({message:"Home Page"})
})

const server = http.createServer(app)
server.listen(5000,()=>{
    console.log("server is running in http://localhost:5000");
})
