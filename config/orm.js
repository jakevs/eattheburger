// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {

  selectAll: function (cb) {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function (err, result) {
          if (err) {
              throw err;
          }
          cb(result);
      });
  },

  insertOne: function (db, cb) {
      var queryString = "INSERT INTO burgers (burger_type) VALUES (?)";
      connection.query(queryString, [db], function (err, result) {
          if (err) {
              throw err;
          }
          cb(result);
      });
  },

  updateOne: function (id, cb) {
      var queryString = "UPDATE burgers SET eaten = true WHERE id = ?";

      connection.query(queryString, [id], function (err, result) {
          if (err) {
              throw err;
          }
          cb(result);
      });
  }
};
module.exports = orm;
