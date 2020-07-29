const calculateRectangleArea = function (length, width){
  let a ;
  if (length >= 0 && width >= 0){
    a = length * width;
  }
  return a;
};

const calculateTriangleArea = function (base, height){
  let a ; 
  if (base >= 0 && height >= 0){
    a = 0.5 * base * height;
  }
  return a; 
};

const calculateCircleArea = function (radius){
  let a  ;

  if (radius >= 0){
    a = Math.PI * (radius * radius); 
  }
  return a;
}

