var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb2) {
      orm.selectAll("burgers", function(res) {
        cb2(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
  
  module.exports = burger;