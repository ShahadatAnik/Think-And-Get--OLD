const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const nodemailer = require("nodemailer");

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

app.post("/user/verifyemail/", (req, res) => {
    const code = req.body.code;
    const email =  req.body.email;
    // console.log(code);
    // console.log(email);
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  //let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "rashikbuksh71@gmail.com", // generated ethereal user
      pass: "ljeceenkkayemrqy", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Think and Get" <rashikbuksh71@gmail.com', // sender address
    to: email, // list of receivers
    subject: "Verification Code ✔", // Subject line
    text: "Welcome to Think and get. Your verification code is: "+code+ " ;Enjoy", // plain text body
    html: "<b>Welcome to Think and get. Your verification code is: "+code+ " ;Enjoy</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
    
});

app.get("/user/forgot_password/", (req, res) => {
    //console.log("verify login")
    const email = req.query.email;
    const code = req.query.code;
    //console.log("data  "+email+" "+code)
    const get_user = "select id from customers where email = ?";
    db.query(get_user, [email], (err, result) => {
        //console.log(result)
        if (result.length === 0) {
            console.log("No user found");
            res.send("No user found");
        } else {
            async function main() {
                // Generate test SMTP service account from ethereal.email
                // Only needed if you don't have a real mail account for testing
                //let testAccount = await nodemailer.createTestAccount();
              
                // create reusable transporter object using the default SMTP transport
                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false, // true for 465, false for other ports
                  auth: {
                    user: "rashikbuksh71@gmail.com", // generated ethereal user
                    pass: "ljeceenkkayemrqy", // generated ethereal password
                  },
                });
              
                // send mail with defined transport object
                let info = await transporter.sendMail({
                  from: '"Think and Get" <rashikbuksh71@gmail.com', // sender address
                  to: email, // list of receivers
                  subject: "Verification Code ✔", // Subject line
                  text: "Welcome to Think and get. Your verification code is: "+code+ " ;Enjoy", // plain text body
                  html: "<b>Welcome to Think and get. Your verification code is: "+code+ " ;Enjoy</b>", // html body
                });
              
                console.log("Message sent: %s", info.messageId);
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
              
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
              }
              
              main().catch(console.error);
                  
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

app.post("/user/create_shop", (req, res) => {
    const shop_name = req.body.shop_name;
    const shop_location = req.body.shop_location;
    const shop_address = req.body.shop_address;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    console.log(shop_name, email, password, phone)
    const create_user =
        "INSERT INTO shoppers (name, email, phone, password, shop_location, address) VALUES (?, ?, ?, ?, ?, ?);";
    db.query(
        create_user,
        [shop_name, email, phone, password, shop_location, shop_address],
        (err, result) => {
            res.send(result);
            if (err) {
                console.log(err);
            }
        }
    );
});

app.get("/user/reset_password", (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    //console.log(email, password);
    const update_password = "UPDATE customers SET password = ? WHERE email = ?";
    db.query(update_password, [password, email], (err, result) => {
        res.send("Password updated");
        if (err) {
            console.log(err);
        }
    }
    );
});

app.listen(3001, ()=>{
    console.log('Running on port 3001');
})