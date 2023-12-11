let http=require("http");
http.createServer((req,res)=>{
    res.write(JSON.stringify({"hello":"hello1","id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}));
    res.end();
}).listen(3006,()=>{
    console.log(`server has started at ${3006}`);
})

// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);


let a=require("http");
a.createServer((req,res)=>{
    console.log(req.method);

    if(req.method=="GET"){
        res.write("hello this is from get")
    }else if(req.method=="POST"){
        res.write("hello this is from post")
    }else if(req.method=="PUT"){
        res.write("hello this is from put")
    }else{
        res.write("Hello this from delte")
    }
    res.end();
}).listen(3007,()=>{
    console.log("server in on");
})