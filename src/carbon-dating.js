const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(n) {

  let new_n = Number(n);
  if (isNaN(new_n)) return false
  if (typeof new_n !== 'number') return false;
  if(new_n === '') return false;
  if(new_n < 1 || new_n > 15) return false;
  
  let nat_log = Math.log(MODERN_ACTIVITY/new_n);

  let k = 0.693/HALF_LIFE_PERIOD;

  let rez = Math.ceil(nat_log/k);

  return rez

};
