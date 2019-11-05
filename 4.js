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
    예상출력:
    cccc

    출력:
    cccc

    이유:
    cc는 그냥 wrap함수의 지역변수이기 때문임.

*/