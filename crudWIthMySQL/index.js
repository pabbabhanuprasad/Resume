const express=require("express");
const mysql=require("mysql");

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Bhanu@123",
    database:"crudEmployee"
})

//connect to mysql
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("MySQL connected")
})

const app=express();

//Craete Database
app.get("/createdb",(req,res)=>{
    let sql="CREATE DATABASE crudEmployee";
    db.query(sql,(err)=>{
        if(err){
            throw err;
        }
        res.send("Databae Created");
    })
})

//create a Table
app.get("/createemployee",(req,res)=>{
    let sql='create table employee(id int AUTO_INCREMENT, name varchar(30),designation varchar(30),primary key (id))'
    db.query(sql,err=>{
        if(err){
            throw err
        }
        res.send('Employee table created')
    })
})

//Insert data into employee
app.get("/employee2",(req,res)=>{
    let post={name:"Raghu",designation:"Backend Developer"}
    let sql='insert into employee set?'
    let query=db.query(sql,post,err=>{
        if(err){
            throw err;
        }
        res.send("Employee added")
    })
})

//select employees
app.get('/getemployee',(req,res)=>{
    let sql='select * from employee'
    let query=db.query(sql,(err,result)=>{
        if(err){
            throw err
        }
        res.send("Employee details fetched")
    })
})

//update employee
app.get("/updateemployee/:id",(req,res)=>{
    let newName='Bhanu'
    let sql=`UPDATE employee SET name='${newName}' where id=${req.params.id}`
    let query=db.query(sql,err=>{
        if(err){
            throw err
        }
        res.send("Employee updated")
    })
})

//delete employee
app.get('/deleteemployee/:id',(req,res)=>{
    let sql=`delete from employee where id=${req.params.id}`
    let query=db.query(sql,err=>{
        if(err){
            throw err
        }
        res.send("Employee deleted")
    })
})

//delete employee
app.get("/deleteemployee/:id",(req,res)=>{
    let sql=`DELETE FROM employee WHERE id=${req.params.id}`
    let query=db.query(sql,err=>{
        if(err){
            throw err
        }
        res.send('Employee deleted')
    })
})


app.listen("3001",()=>{
    console.log('server started on 3001')
})