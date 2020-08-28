const express = require("express");
const router = express.Router();

const Burger = require("../models/burger");

router.get("/", function (req, res) {
    Burger.selectAll(function (data) {
        let burgers = {
            burgers: data
        };
        res.render("index", burgers);
    });
});

router.post("/api/burgers", function (req, res) {
    let burger = req.body;
    Burger.insertOne(burger, function (result) {
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    let {
        id
    } = req.params;

    Burger.updateOne({
            id: id
        },
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});

module.exports = router;