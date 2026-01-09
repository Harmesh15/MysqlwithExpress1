const express = require("express");
const db = require("./utils/db-connection");
const routerBusUsers = require("./routes/studentRouter");
const app = express();


app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello from server");
})

app.use("/bus",routerBusUsers)
app.use("/user",routerBusUsers)

app.listen(3000,()=>{
    console.log("Server is running");
})

