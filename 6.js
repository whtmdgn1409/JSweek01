console.log(10 == 10);
console.log([10] == [10]);
console.log({ e: 10 } == { e: 10 });

/* 예상출력:
   true
   true
   true

   이유:
    1번은 숫자==숫자이므로 true
    2번은 오브젝트 == 오브젝트이므로 true?
    3번은 오브젝트 == 오브젝트 true?
    
    궁금한점-> 이런부분은 암기의 영역인가?


    출력:
    true
    false
    false

    이유:
    1번은 답이 맞았고 2번 3번이 틀렸는데,
    오브젝트는 두개가 같다고 연산이 안된다.


 */