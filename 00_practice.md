# 6번문제
```javascript
console.log([10] == [10]);
```
- 예상 출력
true

- 실제 출력
false

- why?
javascript에서는 object끼리 비교하는데 배열 안에 10이라는 number가 있다고 하여 같은 object는 아니다

# 7번문제
```javascript
console.log(6 + true);
console.log("" == false);
console.log("1" == true);
```
- 예상출력
??
true
true

- 실제 출력
7
false
true

-why?
true는 숫자 1으로 취급한다
""는 빈 문자열이다
true는 숫자 1 또는 문자열 1이 될 수 있다.

# 9번문제
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

- 예상 출력
20
20

- 출력
10
20

- why?
plusFunction과 plusArrowFunction 모두 익명함수를 사용했다. plusArrowFunction은 화살표함수를 사용했다. 이 때, plusFunction의 h는 this.h=10; 의 h와 바인드되지 않아서 h의 초기값이 없게되어 결과값이 10이고, plusArrowFunction의 h는 바인드되어 초기값이 10이기 때문에 결과값이 20이 출력된다.


# 이외의 잡다한 지식들
11.9.3The Abstract Equality Comparison Algorithm
The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

If Type(x) is the same as Type(y), then
If Type(x) is Undefined, return true.
If Type(x) is Null, return true.
If Type(x) is Number, then
If x is NaN, return false.
If y is NaN, return false.
If x is the same Number value as y, return true.
If x is +0 and y is −0, return true.
If x is −0 and y is +0, return true.
Return false.
If Type(x) is String, then return true if x and y are exactly the same sequence of characters (same length and same characters in corresponding positions). Otherwise, return false.
If Type(x) is Boolean, return true if x and y are both true or both false. Otherwise, return false.
Return true if x and y refer to the same object. Otherwise, return false.
If x is null and y is undefined, return true.
If x is undefined and y is null, return true.
If Type(x) is Number and Type(y) is String,
return the result of the comparison x == ToNumber(y).
If Type(x) is String and Type(y) is Number,
return the result of the comparison ToNumber(x) == y.
If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.
If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).
If Type(x) is either String or Number and Type(y) is Object,
return the result of the comparison x == ToPrimitive(y).
If Type(x) is Object and Type(y) is either String or Number,
return the result of the comparison ToPrimitive(x) == y.
Return false.
NOTE 1Given the above definition of equality:

String comparison can be forced by: "" + a == "" + b.
Numeric comparison can be forced by: +a == +b.
Boolean comparison can be forced by: !a == !b.
NOTE 2The equality operators maintain the following invariants:

A != B is equivalent to !(A == B).
A == B is equivalent to B == A, except in the order of evaluation of A and B.
NOTE 3The equality operator is not always transitive. For example, there might be two distinct String objects, each representing the same String value; each String object would be considered equal to the String value by the == operator, but the two String objects would not be equal to each other. For Example:

new String("a") == "a" and "a" == new String("a")are both true.
new String("a") == new String("a") is false.
NOTE 4Comparison of Strings uses a simple equality test on sequences of code unit values. There is no attempt to use the more complex, semantically oriented definitions of character or string equality and collating order defined in the Unicode specification. Therefore Strings values that are canonically equal according to the Unicode standard could test as unequal. In effect this algorithm assumes that both Strings are already in normalised form.