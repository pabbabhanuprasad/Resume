var x= require("http");
var y=require("url");
var z=require("fs");

x.createServer((req,res)=>{
   let example=y.parse(req.url,true);
   console.log(req.url);
   console.log(req.method);
   if(example.pathname=="/register" && req.method=="GET"){
    z.readFile("./index.html",(err,data)=>{
        res.write(data);
        res.end();
    })
    
   }
   else if(example.pathname=="/register" && req.method=="POST"){
    res.write(JSON.stringify([{"register-key":"post-value"}]));
    res.end();
   }
   else{
    console.log(req.url);
    res.write(JSON.stringify([{"user":"invalid creditials"}]));
    res.end();
   }
}).listen(3002,()=>{
    console.log("Server running on 3002");
});