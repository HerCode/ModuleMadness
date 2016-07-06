//Node.js
('document').ready(function() {
console.console.log('Hello World');
});

/*Module1*/

module.exports = function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
};
/*Module2*/

modules.exports = function(num){
  return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

/*Module3*/

var getRandomNum = require('./Mod1.js');

var convertCurrency = require('./Mod2.js');

module.exports.getRandomNum = {
    getRandomNum:function(){
    return getRandomNum(num(100, 1000000));
  },
  convertCurrency: function(){
    return 'convertCurrency \n';
  }
};
