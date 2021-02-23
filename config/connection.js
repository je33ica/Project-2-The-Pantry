const mysql = require("mysql");

//first thing is to set up connection to database
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "Catherine62#",
    database: "pantryDB"
  });
}
  connection.connect();
  
  
  
  module.exports = connection; 
  