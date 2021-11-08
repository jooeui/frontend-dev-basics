/* 
배열
*/

// 1. 내장 객체(생성자 함수)
console.log("=== 생성1: 내장 객체(생성자 함수) ===================");

var a1 = new Array();
console.log(typeof(a1), a1 instanceof Array, a1.length);

// 배열을 정의할 때 크기 지정은 별 의미가 없다.
// 동적으로 배열은 늘어난다.
var a2 = new Array(10);
a2[0] = 0;
a2[5] = 5;
a2[10] = 10;    // 동적으로 배열 크기가 늘어나기 때문에 length가 10에서 11로 변하며 error가 나지 않음!
a2[20] = 20;

console.log(a2[0], a2[1], a2.length);   // 배열 요소에 값을 지정 안 하면 undefined

// 초기값을 지정할 수 있다.
var a3 = new Array(0, 2, 4, 6, 8);
console.log(a3.length);

// 2. 리터럴
console.log("=== 생성2: 리터럴 ===================");
var a4 = [function(){
    console.log("Hello");
}, 20, "JavaScript", true, {
    name: "이브이",
    email: "eevee@gmail.com"
}];

console.log(a4.length);
for(var i = 0; i < a4.length; i++){
    console.log(a4[i]);
}

a4[0]();


// Array vs Object
console.log("=== Array vs Object ===================");
o5 = [];
o5[0] = 0;
o5["1"] = 1;
o5["name"] = "부스터";
console.log(o5["0"], o5[1], o5.length);     // 0 1 2
for(prop in o5){                
    console.log(prop);      // 0\n 1\n name 
}

console.log("================");
o5.forEach(function(e, index){
    console.log(index + ":" + e);
});

Array.prototype.forEach.call(o5, function(e, index){
    console.log(index + ":" + e);
});