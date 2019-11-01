function assert(expect, answer) {
  if (expect == answer) {
    console.log("\033[32m통과\033[0m");
  } else {
    console.log("\033[31m실패\033[0m");
  }
}
const truthTable = {
  and: [[0, 0, 0], [0, 1, 0], [1, 0, 0], [1, 1, 1]],
  or: [[0, 0, 0], [0, 1, 1], [1, 0, 1], [1, 1, 1]],
  not: [[0, 1], [1, 0]]
};

module.exports = {
  assert,
  truthTable
};
