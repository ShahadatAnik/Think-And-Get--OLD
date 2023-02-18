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

app.get("/user/verify_login/", (req, res) => {
    //console.log("verify login")
    const email = req.query.email;
    const password = req.query.password;
    console.log("data  "+email+" "+password)
    //console.log(email, password)
    const get_user = "select id,password from customers where email = ?";
    db.query(get_user, [email], (err, result) => {
        //console.log(result)
        if (result.length === 0) {
            console.log("No user found");
            res.send("No user found");
        } else if (password === result[0].password) {
            console.log("login successful "+result[0].id.toString());
            res.send(result[0].id.toString());
        } else {
            console.log("wrong password");
            res.send("wrong password");
        }
        //res.send(result)
    });
});

app.post("/user/create_user", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    //console.log(name, email, password, phone, profession)
    const create_user =
        "INSERT INTO customers (name, email, phone, password) VALUES (?, ?, ?, ?);";
    db.query(
        create_user,
        [name, email, phone, password],
        (err, result) => {
            res.send(result);
            if (err) {
                console.log(err);
            }
        }
    );
});

app.listen(3001, ()=>{
    console.log('Running on port 3001');
})