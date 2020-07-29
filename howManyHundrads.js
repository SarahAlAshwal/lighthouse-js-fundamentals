const howManyHundrads = function (num) {
  let result = ( num - ( num % 100) ) / 100 ;
  return result;
};