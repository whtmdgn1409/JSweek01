function andFunc(a, b) {
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

function andFunc2(a,b){
    return (a ? (b? true : false) : false);
}

///////////////////////////////////////////

function orFunc(a, b) {
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

function orFunc2(a,b){
    return (a ? true : (b ? true : false));
}

///////////////////////////////////////////

function notFunc(a) {
	if(a){
		return false;
	}else {
		return true;
	}
}

function notFunc2(a) {
    return (a ? false : true);
}