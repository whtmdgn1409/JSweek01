// notation
function tenTo2(a) {
    var half;
    var result = [];

    while(a>1){
        half = Math.floor(a/2);
        ( a==half*2 ) ? result.push(0) : result.push(1);
        a = half;
    }
    result.push(1); 
    return result;
}

function twoTo10(...args) {
    var length = args.length;
    var result = 0;
    for(var i=0; i<length; i++){
        result += args[length-1-i] * Math.pow(2,i);
        console.log(result);
    }
    return result; 
}