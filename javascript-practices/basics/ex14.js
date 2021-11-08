/**
 * URL 다루기
 */

var url1 = "http://www.mysite.com/user?name=피카츄&no=10";

// 1. escape: URL 전부 encoding (x, 쓰지 말기!!!!!!) deprecated
var url2 = escape(url1);
console.log(url2);
// location.href = url2;

// 2. encodeURI: parameter만 encoding (o, 추천!)
var url3 = encodeURI(url1);
console.log(url3);

// 3. encodeURIComponent: 값만 encoding 해야하는 경우 (o, encodingURI와 구별 잘 해서 쓰기!!)
var url4 = encodeURIComponent(url1);    // 안 좋은 사용의 예!!!! url 전체 쓰지 않기!!!!!!!!!!!!!!!!
console.log(url4);

// 만들어야 할 URL
// http://mysite.com/user?no=10&name=피카츄&email=pikachu@gmail.com

var toQueryString = function(o){
    var qs = [];
    for(prop in o){
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }
    // console.log(qs);
    return qs.join("&");
}

var url = "http://mysite.com/user";
var params = {
    name: '피카츄',
    no: 10,
    email: 'pikachu@gmail.com'
}

var url5 = url + "?" + toQueryString(params);
console.log(url5);
// @RequestBody UserVo vo을 사용하면 spring에서 위 json 타입 params을 받을 수 있음!
/* 
$.ajax({
    url: url,
    type: 'post',
    dataType: 'application/json',       // 받을 때
    // contentType: 'application/json',    // 보낼 때
    // data: "no=10&name=피카츄&email=pikachu@gmail.com" (x)
    // data: toQueryString(params)                       (o)
})
 */