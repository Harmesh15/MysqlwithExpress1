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

//  const busestable = `
//  CREATE TABLE Busbooking (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     busNumber VARCHAR(50) UNIQUE NOT NULL,
//     totalSeats INT NOT NULL,
//     availableSeats INT NOT NULL
// );
// `;

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
// connection.execute(busestable);
connection.execute(bookingtable);
connection.execute(paymentTable);

console.log("Tables created succesfully");

}

module.exports = connection;