const express = require("express");
const app = express();
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'harmesh@15',
    database:'firstdatabase'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("mysql connected");
})

// const createTable = `create table student(
//      id INT AUTO_INCCREMENT PRIMARY KEY,
//      name VARCHAR(20),
//      email VARCHAR(20),
// )
// `
// connection.execute(createTable,(err)=>{
//     if(err){
//         console.log(err);
//         connection.end();
//         return;

//     }
//     console.log("Table created");
// })

app.get("/",(req,res)=>{
    res.send("hello from server");
})

app.listen(3000,()=>{
    console.log("Server is running");
})