const test = require("./test");

function and(a, b) {
  if (a + b > 1) return 1;
  return 0;
}

test.truthTable.and.forEach(([a, b, answer]) => test.assert(and(a, b), answer));
