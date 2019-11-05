//<---1번 문제--->
var a = 10;
if (true) {
  var a = 20;
}
console.log(a);
/* 
- 예상 출력
10

- 출력
20

- 설명
변수명이 같으면 값을 공유한다.
*/


//<---2번 문제--->
for (var b = 1; b < 10; b++) {}

console.log(b);
/* 
- 예상 출력
10

- 출력
10

- 설명
지역에서 변수를 선언해도 다른 곳에서 참조할 수 있다.
*/


//<---3번 문제--->
var c = 10;

function foo3() {
  var c = 20;
}

foo3();

console.log(c);
/* 
- 예상 출력
20

- 출력
10

- 설명
함수 안에서 정의한 변수는 전역변수와 값을 공유하지 않는다.
*/


//<---4번 문제--->
var cc = "cccc";

function print() {
  console.log(cc); // cccc
}

function wrap() {
  var cc = "bbbbb";
  print();
}

wrap();
/* 
- 예상 출력
cccc

- 출력
cccc

- 설명
함수 내부에 정의된 변수와 전역에서 정의된 변수는 독립적이다.
*/


//<---5번 문제--->
let d;

console.log(d === null);
console.log(d === undefined);
/* 
- 예상 출력
false
true

- 출력
false
true

- 설명
let으로 선언된 d는 undefined이다.
단, d==null과 d==undefined는 맞는 말이다.
*/


//<---6번 문제--->
console.log(10 == 10);
console.log([10] == [10]);
console.log({ e: 10 } == { e: 10 });
/* 
- 예상 출력
true
true
true

- 출력
true
false
false

- 설명
배열의 인덱스 안에 있는 값이 같다고 해서 그 배열이 같은건 아니다.
객체도 마찬가지다.
*/


//<---7번 문제--->
console.log(1 + "f");
console.log(1 + 2 + "f");
console.log(6 + true);
console.log("" == false);
console.log("true" == true);
console.log("1" == true);
console.log("00" == false);
/* 
- 예상 출력
1f
3f
true
false
true
true
true

- 출력
1f
3f
7
true
false
true
true

- 설명
자바스크립트에서 형변환은 Number가 Boolean보다 우선적이다.
*/


//<---8번 문제--->
let g;
console.log(typeof g);
g = null;
console.log(typeof g);
/* 
- 예상 출력
undefined
undefined

- 출력
undefined
object

- 설명
null이라는 값이 들어간 순간부터 object로 본다.
*/


//<---9번 문제--->
function foo8() {
    this.h = 10;
  
    this.plusFunction = function(x) {
      const add = function(some) {
        this.h += some;
      };
      add(x);
    };
    this.plusArrowFunction = function(x) {
      const add = some => {
        this.h += some;
      };
      add(x);
    };
  }
  
  const H = new foo8();
  H.plusFunction(10);
  console.log(H.h);
  
  H.plusArrowFunction(10);
  console.log(H.h);
/* 
- 예상 출력
20
20

- 출력
10
20

- 설명
화살표 함수를 선언할 때 인자가 하나일 때는 소괄호를 생략한다.
화살표 함수를 리턴할 때 함수가 한줄밖에 없다면 자동으로 그 줄을 리턴한다.

plusFunction에선 리턴이 되는게 없으므로 add(x);를 하면 의도한대로 바뀌지 않는다.
하지만 plusArrowFunction은 자동으로 리턴을 해주기 때문에 의도한대로 20을 출력한다.

*/