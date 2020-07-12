const orm = require("../config/orm.js");

const db = {
    all: async () => {
    return await orm.selectAll()
},
    create: async (addBurger) => {
    return await orm.insertOne(addBurger)
},
    update: async (burgerId) => {
    return await orm.updateOne(burgerId)
}
};

module.exports = db;