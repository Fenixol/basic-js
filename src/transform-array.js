const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if(!Array.isArray(arr) || arr.length == 0)  throw new Error();
  let transform_arr = [];
  let comands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

  arr.forEach((element, index, arr_old) => {
    
    switch(element) {
      case '--discard-next':
        if (!comands.includes(arr_old[index + 1]) && !comands.includes(arr_old[index - 1])) {
          arr_old.splice(index+1, 1);
        }
      break;
      case '--discard-prev':
        if (!comands.includes(arr_old[index + 1]) && !comands.includes(arr_old[index - 1])) {
          transform_arr.pop();
        }
      break;
      case '--double-next':
        if (!comands.includes(arr_old[index + 1])  && !comands.includes(arr_old[index - 1])) {
          if(arr[index+1]){
            transform_arr.push(arr[index+1]);
          }
        }
      break;
      case '--double-prev':
        if (!comands.includes(arr_old[index + 1]) && !comands.includes(arr_old[index - 1] )) {
          if(arr[index-1]){
          transform_arr.push(arr[index-1]);
        }
      }
      break;
      default:
        if(!isNaN(element)|| typeof element !== 'undefined'){
          return transform_arr.push(element);
        } 
    } 
  });

  return transform_arr
  
};
