const test = require("./test");

function and(a, b) {
  if (a * b > 0) return 1;
  return 0;
}

function or(a, b) {
  if (a + b > 0) return 1;
  return 0;
}

test.truthTable.and.forEach(([a, b, answer]) => test.assert(and(a, b), answer));

test.truthTable.or.forEach(([a, b, answer]) => test.assert(or(a, b), answer));
