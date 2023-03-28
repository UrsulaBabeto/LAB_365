//npm i express
const express = require("express");

const app = express();
app.use(express.json())

app.get('/',(req, res)=>{
    res.status(200).json({message:"welcome"})
})

app.post('/task',(req,res)=>{
   const text = req.body
    res.json({text})
})
app.listen(3333, () => console.log("mãe ta on"));
