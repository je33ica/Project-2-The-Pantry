const connection = require("./connection.js");

const orm = {
    selectAll: function (tableInput, cb) {
      const queryString = "SELECT * FROM " + tableInput + ";";
  
      connection.query(queryString, function (err, result) {
        if (err) throw err;
        return cb(result);
      });
    },





}
module.exports = orm;
