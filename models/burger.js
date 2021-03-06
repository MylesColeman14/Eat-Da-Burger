
var orm = require('../config/orm.js');


var burger = {
  
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  
  insertOne: function(cols, values, cb) {
    orm.insertOne('burgers', cols, values, function(res) {
      cb(res);
    });
  },

 
  updateOne: function(objColValues, condition, cb) {
    orm.updateOne('burgers', objColValues, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;