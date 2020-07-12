// Import MySQL connection.
var connection = require("../config/connection.js");

async function selectAll(){
  const query = `SELECT * FROM burgers`;
  const result = await connection.query(query);
  console.table(result)
  return result
}

async function insertOne(add_burger){
  const query = `INSERT INTO burgers (burger_type) VALUES ("${add_burger}");`;
  const result = await connection.query(query)
  console.table(result)
  return result;
}

async function updateOne(id){
  const query = `
      UPDATE burgers
      SET devoured = true
      WHERE id = ${id}
  `;
  const result = await connection.query(query)
  console.table(result)
  return result;
}

const orm = {
  selectAll: selectAll,
  insertOne: insertOne,
  updateOne: updateOne,
}
module.exports = orm;
