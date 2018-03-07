var dbConnection = require("./dbConnection.js");

var orm = {
    edible: function() (table, burgerName, eaten) {
        var burgerSearch = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(burgerSearch, [burgers, eaten, 0], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    eaten: function() (table, burgerName, eaten) {
        var burgerSearch = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(burgerSearch, [burgers, eaten, 1], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
};

module.exports = orm;