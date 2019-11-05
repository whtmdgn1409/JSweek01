const test = require("./test");

function getRectArea(width, height) {
  return width * height;
}

function getCircleArea(radius) {
  return radius * radius * Math.PI;
}

function getTriangleArea(width, height) {
  return (width * height) / 2;
}

function getArea(shape, ...args) {
  switch (shape) {
    case "rect":
      return getRectArea(...args);
    case "circle":
      return getCircleArea(...args);
    case "triangle":
      return getTriangleArea(...args);
    default:
      break;
  }
}

test.assert(getArea("rect", 2, 3), 6);
test.assert(getArea("circle", 4), 16 * Math.PI);
test.assert(getArea("triangle", 2, 3), 3);
