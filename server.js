const express = require("express");
const parser = require("body-parser");

const PORT = process.env.PORT || 3000;

const app = express();

const db = require("./models");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const hbs = require("express-handlebars");
app.engine("handlebars", hbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

const routes = require("./controllers/controller.js");
app.use(routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on PORT" + PORT);
    })
})