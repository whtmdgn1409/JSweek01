let g;
console.log(typeof g);
g = null;
console.log(typeof g);



/*
    예측한 답:
    undefined
    object

    이유:
    맨처음에는 g를 초기화 하지 않아 undefined이고,
    초기화를 null로 해주었기에 object라고 나온다.
 */
