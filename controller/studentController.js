const db = require("../utils/db-connection");

const addEntries=(req,res)=>{
    const {email,name} = req.body;
    const insertQuery = 'insert into student (email,name) values(?,?)'

    db.execute(insertQuery,[email,name],(err)=>{
        if(err){
             console.log("DB ERROR 👉", err);
            console.log("value not inserted Error");
            return res.status(500).send(err.message);
            
        }
        console.log("values inserted in student tables");
        res.status(200).send(`Student with name ${name}, email ${email}, created`);
    })
}


const updateEntries = (req,res)=>{
    const id = req.params.id;
    const {email} = req.body;

    const updateQuery = `update student set email =? where id =?`;

    db.execute(updateQuery,[email,id],(err,result)=>{
        if(err){
            console.log("value not updates");
           return res.status(500).send(err.message);              
        }
        if(result.affectedRows == 0){
            res.status(404).send("user not found");
            return;
        }
        console.log("value updated");
        res.status(200).send("value upadated");
    })
}


const deletEntries=(req,res)=>{
    const {id} = req.params;
    const deleteQuery = `delete from student where id=?`;

    db.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            return res.status(500).send("value not deleted");
        }
        if(result.affectedRows ==0){
            return res.status(404).send("user not found");
        }
        return res.status(200).send(`user with id ${id} deleted`);
    })
}

module.exports = {
    addEntries,
    updateEntries,
    deletEntries
}

// 6171ba099edf971c14587ef15eb87c423699542b