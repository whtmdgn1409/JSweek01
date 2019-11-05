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
    return this.h;
}

const H = new foo8();
H.plusFunction(10);
let k=H.plusFunction(10);
console.log(k);
console.log(H.h);

H.plusArrowFunction(10);
console.log(H.h);
/*
    예상출력:
    20
    20
    이유:
    화살표함수나 그냥 함수나 차이점이 거의 없지 않을것이라 생각해서 이런 답이 나올것이라 예상했다.

    출력:
    10
    20

    이유:
    화살표 함수는 예상대로 출력되었지만, 일반적으로 function으로 만든 함수는 리턴하지 못했다.
    그러나 아직 이해가 좀 부족한것 같다.
 */