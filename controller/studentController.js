const db = require("../utils/db-connection");


         
const addUserEntries=(req,res)=>{
    const {name,email} = req.body;
    const insertQuery = 'insert into Users (name,email) values(?,?)'

    db.execute(insertQuery,[name,email],(err)=>{
        if(err){
             console.log("DB ERROR 👉", err);
            console.log("value not inserted Error");
            return res.status(500).send(err.message);
            
        }
        console.log("values inserted in student tables");
        res.status(200).send(`user with  ${name}, with ${email}, created`);
    })
};


const getAlluser=(req,res)=>{
  const getUserQuery = `select * from Users`;
 
  db.execute(getUserQuery,(err,result)=>{
    if(err){
         return res.status(500).send(err.message);
    }
    return res.status(200).json(result);
  })

}

// >>>>>>>>>>>>>>>>>>>BUS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


const addBusEntries=(req,res)=>{
    const {busNumber,totalSeats,availableSeats} = req.body;
    
      if (!busNumber || !totalSeats || availableSeats === undefined) {
        return res.status(400).send("All fields are required");
    }

    const addbusQuery = `insert into Busbooking (busNumber,totalSeats,availableSeats) values(?,?,?)`;

    db.execute(addbusQuery,[busNumber,totalSeats,availableSeats],(err,result)=>{
        if(err){
            console.log("DB ERROR:", err);
           return res.status(500).send("Bus not added");
        }
       return res.status(200).send("bus added");
    })
}






const getBusSeatStatus = (req,res)=>{
    const seat = req.params.seats;
    

    const updateQuery = `select * from Busbooking where availableSeats > ?`;

    db.execute(updateQuery,[seat],(err,result)=>{
        if(err){
            console.log("value not updates");
           return res.status(500).send(err.message);              
        }
        if(result.affectedRows == 0){
            res.status(404).send("user not found");
            return;
        }
        
        res.status(200).json(result);
    })
}


// const deletEntries=(req,res)=>{
//     const {id} = req.params;
//     const deleteQuery = `delete from student where id=?`;

//     db.execute(deleteQuery,[id],(err,result)=>{
//         if(err){
//             return res.status(500).send("value not deleted");
//         }
//         if(result.affectedRows ==0){
//             return res.status(404).send("user not found");
//         }
//         return res.status(200).send(`user with id ${id} deleted`);
//     })
// }

module.exports = {
    addUserEntries,
    getAlluser,
    addBusEntries,
    getBusSeatStatus
    
}
