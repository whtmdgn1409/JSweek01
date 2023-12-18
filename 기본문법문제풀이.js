// 1번
var a = 10;
if (true) {
  var a = 20;
}

// 이 코드는 var 키워드로 선언된 변수 a를 사용하고 있습니다.
// var는 함수 스코프를 가지고 있어서 블록 내부에서 선언된 변수 a는 전역 변수 a를 대체하게 됩니다.
// 그래서 블록 내부에서 a를 20으로 재할당한 후, 블록 외부에서 a를 참조하면 값이 변경된 상태가 됩니다.
console.log(a);

// 2번
for (var b = 1; b < 10; b++) {}
console.log(b);

// var 키워드로 선언된 변수 b는 함수 스코프이므로 for문 내에서 선언된 b는 전역 변수 역할도 가능함.
// for문에서 10까지 수가 커지고 console.log엔 10이 찍히게 됨.

//3번
var c = 10;
function foo3() {
  var c = 20;
}
foo3();
console.log(c);
// 전역 변수 c와 함수 내부의 지역 변수 c는 서로 다른 변수로 취급함.
// 함수 내부에서의 c는 함수가 실행되는 동안에만 유효하며 함수 외부에는 영향을 미치지 않음.

//4번
var cc = "cccc";
function print() {
  console.log(cc);
}
function wrap() {
  var cc = "bbbbb";
  print();
}
wrap();
// JS에서 변수는 스코프 체인을 통해 검색된다. 따라서 함수 print()에서 cc를 찾을 때,
// 현재 함수의 스코프부터 시작하여 전역 스코프까지 올라가면서 처음으로 발견되는 변수를 사용함.
// 그 결과로 함수 wrap()내에서 cc를 bbbbb로 초기화해도 print()에서 cc를 참조할 때는
// 전역변수 cc가 사용된다. wrap() 내의 지역변수 cc보다 전역 변수 cc를 먼저 찾아서 사용한다.

//5번
let d;
console.log(d === null);
console.log(d === undefined);

// 변수 d가 선언되었지만 초기화되지 않은 상태에서 비교를 진행하면 undefined로 간주된다.
// let으로 선언된 변수들은 암묵적으로 undefined로 초기화되기 때문이다.

//6번
console.log(10 == 10);
console.log([10] == [10]);
console.log({ e: 10 } == { e: 10 });
//JS에서 객체나 배열을 서로 비교할 때 참조에 의한 비교가 이루어지기 때문에, true, false, false가 나온다.

//7번
console.log(1 + "f"); //숫자 1과 문자열 "f"를 더하면 숫자를 문자열로 변환하여 연결함. 따라서 "1f"
console.log(1 + 2 + "f"); //먼저 1+2를 하여 3을 만들고 이를 "f"와 더할 때 문자열로 변환시킴. 따라서 "3f"
console.log(6 + true); //덧셈 연산자는 피연산자를 숫자로 변화하므로 true가 1로 변환되어 7이 됨.
console.log("" == false); //빈 문자열 ""는 falsy 값이므로 == 연산자를 통해 false와 같다고 간주됨. 따라서 true
console.log("true" == true); //문자열 "true"와 불리언 true는 서로 다른 타입이므로 false
console.log("1" == true); //문자열 "1"과 불리언 true를 비교할 때 true를 숫자로 변환함. true는 숫자 1로 간주되므로 "1"과 1을 비교하면 변환이 일어나서 true가 된다.
console.log("00" == false); //문자열 "00"과 불리언 false를 비교할 때 false를 숫자로 변환함. false는 0으로 간주되므로 "00"과 0을 비교하면 변환이 일어나서 true가 된다.
