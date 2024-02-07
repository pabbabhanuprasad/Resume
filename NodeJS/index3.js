let express = require("express");
var port = 3009;
let app = express();
let fs = require("fs"); //predefined module not need to get it from outside

//middleware
//now I'm passing a data "hello":"Bhanu" as a raw data req is get and hitting an api
//now i'm getting "hello":"Bhanu" in the terminal

//we stored the register data,Now we are placing this data in another page with fs

var register = [];

app.use(express.json());
//actual code for above line

// app.use((req,res,next)=>{
//     var body="";
//     req.on("data",(chunk)=>{
//         body+=chunk.toString();
//     })
//     req.on("end",()=>{
//         console.log(body);
//         req.body=body;
//         next();
//     })
// })

app.get("/users", (req, res) => {
  //if req is get and we want to get the req.body we will get undefined in terminal
  //To avoid undefined middleware came in to picture
  //by using middleware we can perform the operations
  fs.readFile("index.json", (err, data) => {
    let register = JSON.parse(data);
  
    register.push(req.body);
    fs.writeFile("index.json", JSON.stringify(register), (err) => {
      res.json(req.body);
    });
  });
});

// app.get("/users",(req,res)=>{
//     fs.readFile("index.json",(err,data)=>{
//         res.json(JSON.parse(data));
//     })
// })

// app.post("/",(req,res)=>{
//     register.push(req,res);
//     fs.writeFile("index.json",JSON.stringify(register),(err)=>{
//         res.json("values stored")
//     })
// })

app.get("/roots", (req, res) => {
  res.send("hello from roots");
});

app.post("/roots", (req, res) => {
  res.send("hello bhanu from register roots");
});

app.listen(port, () => {
  console.log(`hi ${port} is listening`);
});
