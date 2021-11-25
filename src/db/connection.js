let util = require("util");
let mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "350394",
    database: "employees"
})

connection.connect();