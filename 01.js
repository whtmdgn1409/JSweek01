//ex
console.log(and_(1,1));
console.log(or_(0,0));
console.log(not_(0));
console.log(xor_(1, 0));
console.log(half_(1, 1));
console.log('full: ', full_(1, 0, 0));


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
    return not_(or_(and_(a, b), and_(not_(a), not_(b))));
}
function half_(a, b){
    return [xor_(a, b), and_(a, b)];
}

function full_(a, b, c){
    return [not_(xor_(not_(xor_(a, b)), c)), or_(and_(not_(xor_(a, b)), c), and_(a, b))];
}

//ex
var test1 = new Array();
console.log(bit_10to2(17, test1));
console.log(bit_2to10(1110, 0, 1));

//3. 진수 변환
function bit_10to2(a, ans){
    if(a) ans.unshift(a&1);
    return a?bit_10to2(a>>1, ans):ans;
}

function bit_2to10(b, ans, k){
    return b>0?bit_2to10(parseInt(b/10), ans+(b%10)*k, k*2):ans;
}

//ex
var test3=new Array();
var bitarr1=new Array(1, 0, 0, 0);
var bitarr2=new Array(1, 1, 0, 1);
console.log(bit_2_plus(bitarr1, bitarr2, 0, test3))
//4. 응용

function bit_2_plus(a, b, C, res){
    if(and_(!C, and_(!a.length, !b.length))) {
        return res;
    }
    var apop=0, bpop=0;
    if(a.length) {
        apop=a.pop();
    } else {
        apop=false
    }

    if(b.length) {
        bpop=b.pop()
    } else {
        bpop=b
    }
    var S_C = full_(apop, bpop, C);
    res.push(Number(S_C[0]));
    return bit_2_plus(a, b, S_C[1], res);
}