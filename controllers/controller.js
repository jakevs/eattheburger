const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
        const hbsObject = {
            burgers: dbBurger
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    db.Burger.create({
        burger_type: req.body.burger_type,
        eaten: false
    }).then(function(dbBurger) {
        res.join({
            id: result.insertId
        });
    }).catch(function(err) {
        res.json(err);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    db.Burger.update({
        eaten: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(dbBurger) {
        res.json(dbBurger);
    }).catch(function(err) {
        res.json(err);
    });
});

module.exports = router;