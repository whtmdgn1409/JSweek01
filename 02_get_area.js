function getArea(type, ...args){
    if(type === 'tri'){
      return args[0]*args[1]/2;
    }else if(type === 'circle'){
      return 3.14 * args[0] * args[0];
    }else if(type === 'rect'){
      return args[0]*args[1];
    }else{
      return "type을 재지정하세요.";
    }
  }
  console.log(getArea('tri', 3, 4));
  console.log(getArea('circle', 5));
  console.log(getArea('rect', 3, 4));
  console.log(getArea('cd', 5));