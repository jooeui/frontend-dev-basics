/* 
구문(statement)
1. 자바스크립트 실행 단위
2. 구문 구성 요소
    - 값, 연산자: 표현식
    - 주석: 구문을 구성해도 실행되지 않음
    - 예약어: if, const, for, ...
3. 구문의 예
if 
if~else 
switch 
for 
while 
do~while 
for~in
4. 공백: 토큰 분리
5. 세미콜론:
    원칙적으로 구문을 분리
6. 개행
*/

/* 
세미콜론(;)은 표현식을 표현식 구문으로 만들어서 이를 바로 실행하게 한다.
*/

// i = 10;
// o = {

// }   // 자동으로 ; 붙여준다고 생각~

// 세미콜론(;)을 만나면 여기는 구문이구나~! 하고 실행!!
//  - 구문으로 만들어 실행시켜주는 역할
var s = "hello world"; console.log(s)
// var s = "hello world" console.log(s)   // 이렇게 하면 안 됨!!!!!!!

var s = "hello world"
console.log(s)

// 개행의 역할
// 1. 세미콜론(;)을 대체한다.
var s = "hello world"
console.log(s);

// 2. 상황에 따라서는 토큰을 분리하는 역할
a
=
2
+
2
console.log(a);