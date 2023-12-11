let express=require('express');
//get the local storage here 
const {LocalStorage}=require("node-localstorage");
//creating an instance to the localstorage
const localStorage=new LocalStorage('./localStorage');



let app1=express();

app1.get("/",(req,res)=>{
localStorage.setItem("hello",JSON.stringify({"hello":"hi"}));
let parsedItem=JSON.parse(localStorage.getItem("hello"));
res.status(200).json(parsedItem);
})
app1.listen(3002,()=>{
    console.log("port is 3002");
})





// we cant use local storage directly,we have to create an instance