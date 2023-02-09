const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// MySQL
const mysql = require("mysql");
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "think_and_get",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extender: true }));

app.get("/getCustomer", (req, res) => {
    const sqlSelect =
        "SELECT email,password from customers";
            db.query(sqlSelect, (err, result) => {
        console.log(result)
        res.send(result);
    });
});

app.post("/createCustomer", (req, res)=> {
    const variable = req.body.email;

    const sqlQuery = "query";
    db.query(sqlQuery,[variable], (err, result)=>{
        // if(!err){
            res.send(result);
        //}
    });
});

app.post("/createShopper", (req, res)=> {
    const variable = req.body.email;

    const sqlQuery = "query";
    db.query(sqlQuery,[variable], (err, result)=>{
        // if(!err){
            res.send(result);
        //}
    });
});

app.listen(3001, ()=>{
    console.log('Running on port 3001');
})