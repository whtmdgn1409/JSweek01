function assert(expect, answer) {
  if (expect == answer) {
    console.log("통과");
  } else {
    console.log("실패");
  }
}
const truthTable = {
  and: [[0, 0, 0], [0, 1, 0], [1, 0, 0], [1, 1, 1]]
};

module.exports = {
  assert,
  truthTable
};
