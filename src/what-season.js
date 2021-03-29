const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date_str) {

      if(date_str === undefined) return "Unable to determine the time of year!";
      if(typeof date_str === 'string') throw "Error";

      let date_season = new Date(date_str);
      
      if(date_season.getFullYear() == 2021) throw "Error";

      const month = date_season.getMonth();

      if( month <2 || month == 11 ){
        return 'winter';
      }
      if( month > 1 && month < 5 ){
        return 'spring';
      }
      if( month > 4 && month < 8 ){
        return 'summer';
      }
      if( month > 7 && month < 11 ){
        return 'autumn';
      }
  
};
