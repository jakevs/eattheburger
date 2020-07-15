var connection = require("../config/connection.js");

async function selectAll(){
  const query = `SELECT * FROM burgers`;
  const result = await connection.query(query);
  // console.table(result)
  return result
}

async function insertOne(addBurger){
  const query = `INSERT INTO burgers (burger_type) VALUES ("${addBurger.burgerName}");`;
  // console.log(addBurger);
  
  const result = await connection.query(query)
  // console.table(result)
  return result;
}

async function updateOne(id){
  const query = `
      UPDATE burgers
      SET eaten = true
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
