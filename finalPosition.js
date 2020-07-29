const finalPosition = function (moves) {
  let location = [0,0];
  for (let step of moves){
    if (step === 'north'){
      location[1] += 1;
    }
    else if (step === 'south'){
      location[1] -= 1;
    }
    else if (step === 'east'){
      location[0] += 1;
    }
    else if (step === 'west'){
      location[0] -= 1;
    }
  }
  return location;
}
