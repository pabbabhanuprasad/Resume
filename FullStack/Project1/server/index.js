const express=require('express');
const app=express()

const db=require("./models");

db.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log("Our server is running at 3001 port")
    });
})





