/// 1. Logic Gate
function andFunc(a,b){
    return (a ? (b? true : false) : false);
}


function orFunc(a,b){
    return (a ? true : (b ? true : false));
}


function notFunc(a) {
    return (a ? false : true);
}

/// 2. Arithmetic Operators
var carryOut;
var carryIn;
var sum;

function halfAdder(a, b) {
    return (andFunc(a,b) ? (
        carryOut = true, sum = false
        ) : (
            carryOut=false, sum=false
        )
    );
}

function fullAdder(a, b, c) {
    return (c ? 
        (andFunc(a,b) ? 
            (carryOut=true, sum=true)
            :(orFunc(a,b) ? 
                (carryOut=true, sum=false)
            : (carryOut = false, sum = true)))
        : halfAdder(a,b));
}


/// 4. Application (NaN이라 다시해야합니당)
// function getSum(a, b) { //length는 같다고 가정
//     var result;
//     for(var i=a.length-1; i>=0; i--){
//         (i == a.length-1) ? result += (andFunc(a[i], b[i]) ? 1 : 0) : (carryIn = true ? result += (fullAdder(a[i], b[i], true) ? 1 : 0) : result += (fullAdder(a[i], b[i]? 1 : 0)));
//     }
//     return result; 
// }