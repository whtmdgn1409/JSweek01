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
