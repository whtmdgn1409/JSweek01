//0. ex
console.log(and_(1,1));
console.log(or_(0,0));
console.log(not_(0));
console.log(xor_(1, 0));
console.log(half_(1, 1));
console.log(full_(1, 1, 1));


//1. 논리연산자
function and_(a, b){
    return a?(b?true:false):false;
}

function or_(a, b){
    return a?(true):(b?true:false);
}

function not_(a){
    return a?false:true;
}

//2. 산술연산자
function xor_(a, b){
    return not_(a==b);
    //return or_(a+b==0, a+b==2);
}
function half_(a, b){
    return [xor_(a, b), and_(a, b)];
}

function full_(a, b, c){
    return [not_(xor_(not_(xor_(a, b)), c)), or_(and_(not_(xor_(a, b)), c), and_(a, b))];
}

//3. 진수 변환