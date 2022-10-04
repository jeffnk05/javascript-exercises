function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const ftoc = function(x) {
  const c = (x - 32) * 5/9;
  return round(c, 1);
};

const ctof = function(x) {
  const f = x * (9/5) + 32;
  return round(f, 1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
