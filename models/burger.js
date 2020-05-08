// Import ORM
var orm = require("../config/orm.js");

var burger = {
// Select
  selectAll: function(bb) {
    orm.selectAll("burgers", function(res) {
      bb(res);
    });
  },
// Insert
  insertOne: function(cols, vals, bb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      bb(res);
    });
  },
// Update
  updateOne: function(objColVals, condition, bb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      bb(res);
    });
  },
// Delete
  deleteOne: function(condition, bb) {
    orm.deleteOne("burgers", condition, function(res) {
      bb(res);
    });
  }
};

// Export database functions
module.exports = burger;
