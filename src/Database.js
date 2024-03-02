 const mysql = require ("mysql");
// const dotenv = require ("dotenv");
const { database, user, host, password } = require("./App_resources/resources");
 //dotenv.config();
 
 const connection = mysql.createPool({

    host: host,
    user: user,
    password: password,
    database: database
 }) 

 module.exports = connection;