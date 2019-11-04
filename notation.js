// notation
function tenTo2(a) {
    var half;
    var result=[];

    while(a>1){
        half = Math.floor(a/2);
        ( a==half*2 ) ? result.push(0) : result.push(1);
        a = half;
    }
    result.push(1); 
    return result;
}

//a.toString(2); 
//a.toString(10);