const ageCalculator = function (name, yearOfBirth, currentYear){
  let age = currentYear - yearOfBirth ;
  let result = name + ' is ' + age + ' years old.';
  return result;
};