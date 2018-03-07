var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// list all burgers
router.get("/", function(req, res) {
    burgers.all(function(data) {
        var hbsObject = {
            burgers: data
        };
    console.log(hbsObject);
    res.render("index", hbsObject);
    });
});

// eat burger
router.put("/api/eatBurger/:burgerName", function(req, res) {
    var condition = "burgerName = " + req.params.id;
    console.log(condition);

    burger.eat({
        eaten: req.body.eaten
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(424).end();
        } else {
            res.status(200).end();
            }
        });
    });
    
module.exports = router;