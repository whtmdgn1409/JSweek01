// Logic Gate
function andFunc2(a, b) {
	if(a){ 
		if(b){ 
			return true; // a&&b return a
		}else{
			return false; // a&&b return b
		}
	}else {
		return false; 
	}
}

function andFunc(a,b){
    return (a ? (b? true : false) : false);
}

///////////////////////////////////////////

function orFunc2(a, b) {
	if(a){
		return true;
	}else {
		if(b){
			return true;
		}else {
			return false;		
		}
	}
}

function orFunc(a,b){
    return (a ? true : (b ? true : false));
}

///////////////////////////////////////////

function notFunc2(a) {
	if(a){
		return false;
	}else {
		return true;
	}
}

function notFunc(a) {
    return (a ? false : true);
}


/// Arithmetic Operators
var carryOut;
var carryIn;
var sum;

function halfAdder2(a, b) {
    if(andFunc(a,b)){
        carryOut = true;
        sum = false;
    }else {
        carryOut = false;
        sum = false;
    }
    if(orFunc(a, b)){
        carryOut = false;
        sum = true;
    }
}

function halfAdder(a, b) {
    return (andFunc(a,b) ? (
        carryOut = true, sum = false
        ) : (
            carryOut=false, sum=false
        )
    );
}

function fullAdder2(a, b, c) { // c: carry in
    if(c){
        if(andFunc(a, b)) {
            carryOut = true;
            sum = true;
        }else if(orFunc(a, b)){
            carryOut = true;
            sum = false; 
        }else {
            carryOut = false; 
            sum = true; 
        }
    }else {
        return halfAdder(a,b);
    }
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

