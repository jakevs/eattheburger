const express = require("express");
const router = express.Router();

const db = require("../models/burger.js");

router.get("/", function (req, res) {
    db.selectAll(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    db.insertOne(req.body.burger_type, function () {
        res.redirect("/");
    });
});

router.put("/:id", function (req, res) {
    const id = req.params.id;

    console.log("id", id);

    db.updateOne(id, function () {
        res.redirect("/");
    });
});

// router.get("/", function(req, res) {
//     db.all(function(data) {
//         const hbsObject = {
//             burgers: data
//         };
//         res.render("index", hbsObject);
//     });
// });

// router.post("/api/burgers", function(req, res) {
//     db.create({
//         burger_type: req.body.burger_type,
//         eaten: false
//     }).then(function(data) {
//         res.join({
//             id: result.insertId
//         });
//     }).catch(function(err) {
//         res.json(err);
//     });
// });

// router.put("/api/burgers/:id", function(req, res) {
//     db.update({
//         eaten: true
//     }, {
//         where: {
//             id: req.params.id
//         }
//     }).then(function(data) {
//         res.json(data);
//     }).catch(function(err) {
//         res.json(err);
//     });
// });

module.exports = router;