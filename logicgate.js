const test = require("./test");

function and(a, b) {
  if (a * b > 0) return 1;
  return 0;
}

function or(a, b) {
  if (a + b > 0) return 1;
  return 0;
}

function not(a) {
  if (a) {
    return 0;
  }
  return 1;
}

function xor(a, b) {
  return and(not(and(a, b)), or(a, b));
}

function halfAdder(a, b) {
  return [xor(a, b), and(a, b)];
}

function fullAdder(a, b, c) {
  return [xor(xor(a, b), c), or(and(a, b), and(c, xor(a, b)))];
}

test.truthTable.and.forEach(([a, b, answer]) => test.assert(and(a, b), answer));

test.truthTable.or.forEach(([a, b, answer]) => test.assert(or(a, b), answer));

test.truthTable.not.forEach(([a, answer]) => test.assert(not(a), answer));

test.truthTable.xor.forEach(([a, b, answer]) => test.assert(xor(a, b), answer));

test.truthTable.halfAdder.forEach(([a, b, s, c]) =>
  test.assert(halfAdder(a, b), [s, c])
);

test.truthTable.fullAdder.forEach(([a, b, x, s, c]) =>
  test.assert(fullAdder(a, b, x), [s, c])
);
