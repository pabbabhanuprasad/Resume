let express=require("express");

let app=express();

let conn=require("./db.js")

app.use(express.json());//middleware

app.post("/register",(req,res)=>{
    console.log(req.body);
    //to create the table
    // var query1="create table coders(firstName varchar(50),lastName varchar(50))"
    //conn.query(query1,(err,data)=>{

    //to insert values into the table
        conn.query("insert into coders set?",req.body,(err,data)=>{
        console.log(data);
        console.log(err);
        res.status(200).json({
            "status":200,
            "msg":"successfully registered"
        });
    })
})

app.get("/users",(req,res)=>{
    conn.query("select * from bhanu.coders",(err,data)=>{
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).json(data)
        }
    })
})

app.listen(3006,()=>{
    console.log("hi server is on on 3006");
});