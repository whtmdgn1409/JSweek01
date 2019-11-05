var a = 10;

if (true) {
    var a = 20;
}

console.log(a);

/*
    예상출력:
    20

    출력:
    20

    이유: var로 선언된 경우 전역변수와 비슷한 느낌으로  참조할 수 있다.


*/
