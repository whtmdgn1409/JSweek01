# 자바스크립트 기본 문법 #1

## 논리회로

1. ### 논리연산자

두 값을 입력으로 받아 and, or, not 연산을 수행하는 함수를 작성합니다.
두 값의 타입은 숫자(0 | 1) 또는 boolean 타입입니다.
논리연산자는 사용하실 수 없습니다.

  ```javascript
  function andF(a,b){
    if(a==0|| b==0){
      return 0;
    }
    return 1;
  }
  function orF(a,b){
    if(a==1||b==1){
      return 1;
    }
    return 0;
  }
  function notF(a){
    return a? 0:1;
  }

  ```

2. ### 산술연산자

   위에서 만든 논리연산 함수들을 이용해 반가산기, 전가산기 함수를 만듭니다. 입력은 각 각을 값으로 받고 출력은 두 개의 값을 포함한 배열을 반환합니다.

  ```javascript
  function hadder(a,b){
  let sum = orF(andF(notF(a),b),andF(a,notF(b)));
  return [sum,andF(a,b)];
  }

  function fadder(a,b,c){
    bef=hadder(a,b);//1차
    sum=hadder(bef[0],c);//2차
    return [sum[0],orF(sum[1],bef[1])];
  }
  ```

3. ### 진수변환

   10진수 숫자를 입력으로 받아 2진수 형태의 배열을 반환하는 함수와 2진수 형태의 배열을 입력받아 10진수 숫자를 반환하는 함수를 작성합니다.
   ```javascript
   function tento2(num){
    let arr=new Array();
    while(num/2!=0){
      arr.unshift(num%2);
      num=parseInt(num/2);
    }
    return arr;
  }

  function twoto10(arr){
    let num=1;
    let sum=0;
    for(let i=arr.length-1;i>=0;i--){
      sum+=arr[i]*num;
      num*=2;
    }
    return sum;
  }
  ```

4. ### 응용
   2진수 형태의 배열 2개를 덧셈연산하는 함수를 작성합니다.
   ```javascript
   function addTwo(arr1,arr2){
    if(arr1.length<arr2.length){
      for(var i=0;i<arr2.length-arr1.length;i++){
        arr1.unshift(0);
      }
    }
    else if(arr1.length>arr2.length){
      for(var i=0;i<arr1.length-arr2.length;i++){
        arr2.unshift(0);
      }
    }
    var array =new Array();
    var carry = new Array();
    for(var i=arr1.length-1;i>=0;i--){
      if(i==arr1.length-1){
        carry =fadder(arr1[i],arr2[i],0);
      }
      else{
        carry=fadder(arr1[i],arr2[i],carry[1]);
      }
      array.unshift(carry[0]);
    }
    return array;
  }
  ```

## 영역너비 구하기

도형의 이름, 해당 도형의 너비를 구하는데 필요한 요소를 입력받아 너비를 출력하는 함수를 작성합니다.
getArea 함수 하나에서 3개이상의 다양한 도형의 너비를 계산할 수 있어야합니다. 함수내부에서 다른 함수를 사용하셔도 무방합니다.

## 기본 문법 문제풀이

아래의 문제들을 풀어보며 헷갈리는 문법을 익힙니다.

1.

```javascript
var a = 10;

if (true) {
  var a = 20;
}

console.log(a);
```
me >
20

2.

```javascript
for (var b = 1; b < 10; b++) {}

console.log(b);
```
me >
10

3.

```javascript
var c = 10;

function foo3() {
  var c = 20;
}

foo3();

console.log(c);
```
me >
10

4.

```javascript
var cc = "cccc";

function print() {
  console.log(cc);
}

function wrap() {
  var cc = "bbbbb";
  print();
}

wrap();
```
me >
bbbbb

con >
cccc

5.

```javascript
let d;

console.log(d === null);
console.log(d === undefined);
```
me >
false
true

6.

```javascript
console.log(10 == 10);
console.log([10] == [10]);
console.log({ e: 10 } == { e: 10 });
```
me >
true
false
false

7.

```javascript
console.log(1 + "f");
console.log(1 + 2 + "f");
console.log(6 + true);
console.log("" == false);
console.log("true" == true);
console.log("1" == true);
console.log("00" == false);
```
me >
1f
3f
7
true
false
false
false

con >
"1f"
"3f"
7
true
false
true
true

8.

```javascript
let g;
console.log(typeof g);
g = null;
console.log(typeof g);
```
me >
undefined
?

con >
undefined
object

9.

```javascript
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
```
me >
20
20