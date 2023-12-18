function getArea(name, width, height) {
  if (name === "사각형") {
    return width * height;
  } else if (name === "원") {
    return width * height * Math.PI;
  } else if (name === "삼각형") {
    return 0.5 * width * height;
  } else {
    return "저장된 도형이 없습니다.";
  }
}

console.log("사각형의 넓이 : ", getArea("사각형", 10, 12));
console.log("원의 넓이 : ", getArea("원", 10, 12));
console.log("삼각형의 넓이 : ", getArea("삼각형", 10, 12));
console.log("원뿔의 넓이 : ", getArea("원뿔", 10, 12));
