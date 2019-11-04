function andFunc(a, b) {
	if(a){ 
		if(b){ 
			return a; // a&&b return a
		}else{
			return b; // a&&b return b
		}
	}
}

function orFunc(a, b) {
	if(a){
		if(b){
			return a;
		}
	}else {
		if(b){
			return b;
		}else {
			return false;		
		}
	}
}

function notFunc(a, b) {
	var c = a;
	if(a){
		if(b){
			return false; 
		}else {
			return true; 
		}
	}else {
		if(b){
			return true; 
		}else {
			return false;
		}
	}
}




////////////////////////////


function Area(figure, first, ...second){
	var result = 0;
	if(figure == 'circle'){
		result = 3.14*first*first;
	}
	if(figure == 'triangle'){
		result = 0.5*first*second;
	}
	if(figure == 'square'){
		result = first*first;
	}
	if(figure == 'rect'){
		result = first*second;
	}
	return result;
}




///////////////////////////