const mysql = require("mysql");

//first thing is to set up connection to database
const connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "harryjack1214",
    database: "pantryDB"
  });
  
  connection.connect();
  
  
  
  module.exports = connection; 
  