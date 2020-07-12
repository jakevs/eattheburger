const express = require("express");
const router = express.Router();

const db = require("../models/burger");

router.get("/", function(req, res) {
    db.all(function(data) {
        const hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    db.create({
        burger_type: req.body.burger_type,
        eaten: false
    }).then(function(data) {
        res.join({
            id: result.insertId
        });
    }).catch(function(err) {
        res.json(err);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    db.update({
        eaten: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(data) {
        res.json(data);
    }).catch(function(err) {
        res.json(err);
    });
});

module.exports = router;