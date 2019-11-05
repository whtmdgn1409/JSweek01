function getArea(){
    if(arguments[0] === 'triangle'){
        return triangle(arguments[1], arguments[2]);
    }
    if(arguments[0] === 'rectangle'){
        return rectangle(arguments[1], arguments[2]);
    }
    if(arguments[0] === 'circle'){
        return circle(arguments[1]);
    }

}
function triangle(r, h){
    return r*h/2;
}
function rectangle(a, b){
    return a * b;
}
function circle(r){
    return 3.14 * r * r;
}

console.log('triangle : ', getArea('triangle', 10, 5));
console.log('rectangle : ', getArea('rectangle', 10, 5));
console.log('cicle : ', getArea('circle', 10));