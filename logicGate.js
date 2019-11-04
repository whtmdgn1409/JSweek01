/// Logic Gate
function andFunc(a,b){
    return (a ? (b? true : false) : false);
}


function orFunc(a,b){
    return (a ? true : (b ? true : false));
}


function notFunc(a) {
    return (a ? false : true);
}

/// Arithmetic Operators
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
