const express = require("express");
const router = express.Router();

const db = require("../models/burger.js");

// router.get("/", function (req, res) {
//     db.selectAll(function (data) {
//         const hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });

// router.post("/", function (req, res) {
//     db.insertOne(req.body.burger_type, function () {
//         res.redirect("/");
//     });
// });

// router.put("/:id", function (req, res) {
//     const id = req.params.id;

//     console.log("id", id);

//     db.updateOne(id, function () {
//         res.redirect("/");
//     });
// });

router.get("/", async (req, res) => {
    try {
        const data = await db.all();
        const hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    } catch (err) {
        res.render("index", {burgers: [], error: err})
    }
});

router.post("/api/burgers", async (req, res) => {
    const response = await db.create(req.body.data.burger_type);
    res.json({
       status: 200
   })
});

router.put("/api/burger/:id", async (req, res)=> {
    console.log(req)
    const response = await db.update(req.params.id);
    console.log(response);
    res.json({
      status: 200
    });
  });

module.exports = router;