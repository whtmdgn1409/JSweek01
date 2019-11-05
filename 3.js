var c = 10;

function foo3() {
    var c = 20;
}

foo3();

console.log(c);

/*
    예상출력:
    10

    출력:
    10

    이유:
    함수안에 있는 c는 전역 변수가 아닌 지역변수이기 때문이다.

 */