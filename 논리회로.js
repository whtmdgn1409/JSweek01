A = [0, 1, true];
B = [0, 0, false];

function And(a, b) {
  return a & b;
}
function Or(a, b) {
  return a | b;
}
function Not(a) {
  return !a;
}
function Xor(a, b) {
  return a ^ b;
}

function halfAdder(a, b) {
  const sum = Xor(a, b);
  const carry = And(a, b);
  return [sum, carry];
}

function fullAdder(a, b, Cin) {
  const sum = Xor(a, b);
  const carry = And(a, b);

  const Csum = Xor(sum, Cin);
  const Ccarry = (sum & Cin) | carry;

  return [Csum, Ccarry];
}
function toBinary(num) {
  const binary = num.toString(2);
  return binary.split("").map(Number);
}
function toDecimal(num) {
  const decimal = parseInt(num, 2);
  return decimal;
}
function binaryAdder(a, b) {
  res = [];
  if (a.length > b.length) {
    for (i = 0; i < a.length; i++) {
      res[i] = And(a[i], b[i]);
    }
  } else {
    for (i = 0; i < b.length; i++) {
      res[i] = And(a[i], b[i]);
    }
  }
  return res;
}

for (i = 0; i < 3; i++) {
  console.log("----논리회로 연산----");
  console.log(`${i + 1}번째 연산`);
  console.log("And 연산 : ", And(A[i], B[i]));
  console.log("Or 연산 : ", Or(A[i], B[i]));
  console.log("Not 연산 : ", Not(A[i]));

  console.log("----------------------");
  console.log("반가산기, 전가산기 연산");
  const halfRes = halfAdder(A[i], B[i]);
  console.log("HalfAdder Sum : ", halfRes[0]);
  console.log("HalfAdder Carry : ", halfRes[1]);

  const fullRes = fullAdder(A[i], B[i], 1);
  console.log("FullAdder Sum : ", fullRes[0]);
  console.log("FullAdder Carry : ", fullRes[1]);
  console.log("----------------------");
}
console.log(`십진수 15를 이진수로 하면? ${toBinary(15).join("")}`);
console.log(`이진수 1101를 십진수로 하면? ${toDecimal(1101)}`);

console.log(
  "이진수끼리의 덧셈 [1001] + [1110] = ",
  binaryAdder([1, 0, 0, 1], [1, 1, 1, 0])
);
