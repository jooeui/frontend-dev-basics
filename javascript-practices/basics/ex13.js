/**
 * string
 */

// 배열처럼 접근이 가능하다.
var str1 = "Hello World";
console.log("== str1 =======");
for(var i = 0; i < str1.length; i++){
    console.log(str1[i]);
}

// 문자열 합치기
var str2 = 'Hello';
var str3 = 'World';
var str4 = str2 + ' ' + str3;
console.log("str4) " + str4);

// 캐스팅
var str5 = 5 + "5";
console.log("str5) " + str5);  // 결과) 55

var str6 = "boolean: " + true;
console.log("str6) " + str6);  // 결과) boolean: true

// 메소드
var str7 = "string1 string2 string3";

var index = str7.indexOf('string2');    
console.log("str7) " + index);     // 결과) 8 -> 일치하는 값이 없으면 -1 반환

var str8 = str7.substr(10);    // indext 10부터 끝까지
console.log("str8) " + str8);

var str9 = str7.substr(10, 3/* count */);
console.log("str9) " + str9);

var str10 = str7.substring(10, 13/* last index - 1 */);
console.log("str10) " + str10);

