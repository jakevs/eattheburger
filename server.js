const express = require("express");
const methodOverride = require('method-override');
const parser = require("body-parser");

const PORT = process.env.PORT || 3000;

const app = express();

const db = require("./models/burger.js");

app.use(parser.urlencoded({
    extended: true
}));
app.use(parser.json());

app.use(methodOverride("_method"));

app.use(express.static("public"));

const hbs = require("express-handlebars");
app.engine("handlebars", hbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

const routes = require("./controllers/controller.js");
app.use("/", routes);

// app.listen(PORT);

// db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on PORT " + PORT);
    })
// })