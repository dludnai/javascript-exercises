const ftoc = function(input) {
  let finalResult = (input-32)*(5/9);
  if (finalResult !== 0) {
    return (finalResult.toFixed(1));
  }
  else {
    return finalResult;
  }
};

const ctof = function(input) {
  let finalResult = (input*1.8)+32;
  if (finalResult !== 0) {
    return (finalResult.toFixed(1));
  }
  else {
    return finalResult;
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
