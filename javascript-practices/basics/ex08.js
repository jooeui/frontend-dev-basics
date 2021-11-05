/* 
자바스크립트 객체3: 확장
    - 유사 객체(원시타입)은 확장 불가능 
*/

var o = {
    name: "name",
    age: 10
}
console.log(o);

var f = function() {
    console.log('Hello World');
}
f();

var i1 = 10;
var i2 = new Number(10);

console.log("=== 확장 ======================");
o.another = {
    name: "이브이",
    age: 5
}
console.log(o);

f.another = {
    name: "이브이",
    age: 5
}
console.log(f());
console.log(f.another);
console.log(f.prototype);       // 출력결과: {constructor: f}   다음 수업시간에 한당!!!!!!

console.log("=== 기본타입은 확장이 되지 않는다! ======================");
i2.another = {
    name: '샤미드',
    age: 10
}
console.log(i2);    // 

i1.another = {};
console.log(i1.another);    // i1은 원시타입이므로 확장 불가능!!!
