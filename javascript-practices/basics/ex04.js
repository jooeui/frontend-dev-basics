/* 
변수의 범위(Scope)
1. 자바스크립트는 어휘에서 변수의 범위를 알 수 있는 정적 범위이다. (Lexical Scope)
2. ES6 이전
    - 자바와 같은 블록 범위를 지원하지 못함
    - 함수 범위(Function Scope)만 지원
    - function() {...} 안에서 변수 앞에 var 키워드를 사용하면 함수 범위를 가지게 된다.
    - 만일, var 키워드 없이 함수 안에서 변수를 정의하게 되면 전역 범위를 가지게 된다. (Hoisting)
3. ES6 이후
    - Block Scope이 생기는 새로운 두 키워드를 지원한다.
    - let : 변수
    - const : 상수
4. const/let만 사용하고 반드시 쓰자!!
*/
var i = 10;
// j = 100;     // 함수 안에서 var를 붙여주지 않았으므로 슝 올라옴(전역 범위를 가짐, Hoisting) 
var f = function() {
    var i = 20;
    j = 100;
    console.log(i);
    i = j - 1;
}

{
    y = 90;
    // var y = 90;  // 함수 안이 아니므로 별 의미 xxxx
    let x = 10000;
    const PI = 3.14;
    x = 100;
    // 상수인데 값을 변경하니까 에러!!!!!!
    // PI = 0;
}

// error: Block 밖이니까 접근이 안 됨!!!!!!
// console.log(x);

// Hoisting 되어 Block 밖에서도 사용 가능
console.log(y);

f();
console.log(i);
console.log(j);