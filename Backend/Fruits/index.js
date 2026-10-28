const obj1 = require("./apple");
const obj2 = require("./banana");
const obj3 = require("./orange");

require("./apple");
require("./banana");
require("./orange");


const Fruits = [obj1, obj2, obj3];

module.exports = Fruits;