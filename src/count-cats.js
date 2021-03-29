const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
 
  let count_cats = 0
  arr.forEach(function(elem) {
    elem.forEach(function(cat) {
      if(cat === "^^"){
        count_cats++;
      }
    });
  });
  return count_cats
};
