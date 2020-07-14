var mysql = require("mysql");
const util = require("util");

var connection = mysql.createConnection({
  host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'burgers_db'
})
// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'burgers_db'
//   });
// }
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connected as ID " + connection.threadId);
});

const query = util.promisify(connection.query).bind(connection);

module.exports = {
  query: query,
  connection: connection,
}
