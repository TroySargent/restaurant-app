const connection = require("../config/config");


let Burger = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", (err, data) => {
            if (err) {throw err};
            cb(data);
        });
    },
    insertOne: function(newBurger, cb) {
        connection.query("INSERT INTO burgers SET ?", newBurger, (err, data) => {
            if (err) {throw err};
            cb(data);
        });
    },
    updateOne:function(devouredBurger, cb) {
        connection.query("UPDATE burgers SET devoured = true WHERE ?", devouredBurger, (err, data) => {
            if (err) {throw err};
            cb(data);
        });
    }
};

module.exports = Burger;
