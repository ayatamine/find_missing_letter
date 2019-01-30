var findMissingLetter = function(array){
  const alph="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let str_sub=alph.substr(alph.indexOf(array[0]),array.length+1);

return str_sub.split('').filter((item) =>
       !(array.includes(item))
         
   ).join(' ');
}
module.exports.findMissingLetter = findMissingLetter;

//console.log(findMissingLetter(['a','b','d','e']))