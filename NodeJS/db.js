let sql=require("mysql");

let con = sql.createConnection({
    host:"localhost",
    user:"root",
    password:"Bhanu@123",
    database:"bhanu"
});

con.connect((err)=>{
    if(err){
        console.log("err")
    }
    console.log("Hai sql has been connected");
})

module.exports=con;