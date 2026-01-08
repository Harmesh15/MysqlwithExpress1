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
    createTable();
});

function createTable(){

 const usertable = `
 create table if not exists Users(
     id int auto_increment primary key,
     name varchar(20),
     email varchar(20)
);
`;

 const busestable = `
 create table if not exists Buses(
           id int auto_increment primary key,
           busNumber int,
           totalSeats int,
           availableSeats varchar(20)
);
`;

 const bookingtable = `
 create table if not exists Booking(
       id int auto_increment primary key,
       seatNumber int
);
`;


const paymentTable = `
  create table if not exists Payment(
      id int auto_increment primary key,
      amountPaid  int,
      paymentStatus varchar(30)
);
`;


connection.execute(usertable);
connection.execute(busestable);
connection.execute(bookingtable);
connection.execute(paymentTable);

console.log("Tables created succesfully");

}

app.get("/",(req,res)=>{
    res.send("hello from server");
})

app.listen(3000,()=>{
    console.log("Server is running");
})