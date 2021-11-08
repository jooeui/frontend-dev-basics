/* global은 전역 범위 */
console.log("=== global ==========================");
global.name = "피카츄";
console.log(name, global.name);     // 결과) 피카츄 피카츄

var email = 'pikachu@gmail.com';
console.log(email, global.email);   // 결과) pikachu@gmail.com undefined
                                    // var를 빼면 global에 들어가긴 함 ..!

console.log("=== function 객체 메소드 apply ==========================");
var f1 = function() {
    console.log(this);  // 내장 객체들은 모두 global에 포함되어 있음
}
f1();

// this 바꾸기
var o = {
    name: '라이츄'
}
f1.apply(o);


console.log("=== function 객체 메소드 call ==========================");
var f2 = function(s) {
    console.log(s + " " + this.name);
}
f2('hi');   // name을 명시하지 않았으므로 this.name은 global에 있는 name을 가져옴 
f2.call(o, 'hi');   //