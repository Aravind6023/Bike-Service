const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mysql = require("mysql");

var expressfun = express()
expressfun.use(cors())
expressfun.use(bodyparser.json())
expressfun.use(express.json())
expressfun.use(bodyparser.urlencoded({ extended: true }))
expressfun.use(express.static("public"))

let db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",//MYSQL WORKBENCH Password(Edit)
    database: "databasename"//(Edit)
})

expressfun.post("/createuser", (request, response) => {
    let { name, contact, email, bike_name, bike_model, bike_number, message } = request.body;
    let createNewOrder = "INSERT INTO bookorder(name, contact, email, bike_name, bike_model, bike_number, message) values(?,?,?,?,?,?,?)";
    db.query(createNewOrder, [name, contact, email, bike_name, bike_model, bike_number, message], (error, result) => {
        if (error) {
            response.send({ "Status": "error" });
            console.log(error);
        } else {
            response.send({ "Status": "Success" });
            console.log(result);
        }
    });
});

expressfun.listen(3456, () => {
    console.log("Port is running");
})