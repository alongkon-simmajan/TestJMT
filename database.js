const mysql = require("mysql2");
const dbconnection = mysql.createPool({
    host:"localhost",
    user : "root",
    password : "",
    database : "node_login"
}).promise()

module.exports = dbconnection;