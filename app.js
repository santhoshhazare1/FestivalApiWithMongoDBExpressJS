const express=require('express');
const mongoose=require('mongoose');
const app=express();

const postRoute=require('./routes/festivals')

app.use(express.json());

app.use('/festivals',postRoute);

mongoose.connect("mongodb://localhost:27017/santhosh_db",()=>{

console.log("database is connected");
})

app.listen(3000);