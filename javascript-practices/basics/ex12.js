/** 
 * Array 확장(prototype 기반의 확장): List 메소드 추가
 */

Array.prototype.insert = function(index, value){
    if(value instanceof Array){
        // for(var i=0; i<value.length; i++){
        //     this.splice(index++, 0, value[i]);
        // }

        // var _this = this;
        // value.forEach(function(e){
        //     _this.splice(index++, 0, e);
        // });

        value.forEach(function(e){
            this.splice(index++, 0, e);
        }.bind(this));
    } else {
        this.splice(index, 0, value);    
    }
}

Array.prototype.remove = function(index){
    this.splice(index, 1);
}

// List로 사용하기
var a = [1, 2, 4];

console.log(a);     // [1, 2, 3]

a.insert(2, 3);     // a[2] 자리에 3 추가
console.log(a);     // [1, 2, 3, 4]

a.remove(3);        // 4 삭제
console.log(a);     // [1, 2, 3]

a.insert(2, ['a', 'b', 'c']);   // 기대: [1, 2, 'a', 'b', 'c', 3]
console.log(a);                 // 결과: [1, 2, ['a', 'b', 'c'], 3]

var f = function(param) {
    console.log(this.name + ":" + param);
}

f();
var o = {name: "steamcare"};
f.call(o, "steamcare@gmail.com");
f.apply(o);