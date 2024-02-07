// var a= require("http");
// a.createServer((req,res)=>{
//     const simpleObj = {
//         "Hello": "Bhanu"
//     };
//     res.write(JSON.stringify(simpleObj));
//     res.end();
// }).listen(3002,()=>{
//     console.log("Server running on 3002");
// });
var x= require("http");
var y=require("url");
x.createServer((req,res)=>{
   let example=y.parse(req.url,true);
   console.log(req.url);
   console.log(req.method);
   if(example.pathname=="/register" && req.method=="GET"){
    res.write(JSON.stringify([{"register-key":"get-value"}]));
    res.end();
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