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
    database: "extreme_racer",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extender: true }));

// app.get("/api/get_car_1/", (req, res) => {
//     const sqlSelect =
//         "SELECT x_axis, y_axis from cars_position where car_name='car_1'";
//     db.query(sqlSelect, (err, result) => {
//         //console.log(result)
//         res.send(result);
//     });
// });

app.listen(3001, ()=>{
    console.log('Running');
})