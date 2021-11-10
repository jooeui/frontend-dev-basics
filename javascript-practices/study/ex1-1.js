/* 자바스크립트 완벽 가이드 */

// 1.1 자바스크립트 코어

/* 변수는 한 값을 위한 상징적인 이름
   변수는 var 키워드로 선언할 수 있다. */
var x;  // x란 이름의 변수 선언


/* 값은 = 기호를 통해 변수에 할당할 수 있다 */
x = 0;              // 이제 변수 x의 값은 0
console.log(x);     // 변수 x는 변수가 가진 값 0으로 평가된다.


/* 자바스크립트는 다양한 타입의 값을 지원한다. */
x1 = 1;
x2 = 0.01;
x3 = "hello world";
x4 = 'JavaScript';
x5 = true;
x6 = false;
x7 = null;
x8 = undefined;     // undefined는 null과 유사
console.log("x1: " + x1 + "\nx2: " + x2 + "\nx3: " + x3 + "\nx4: " + x4 + "\nx5: " + x5 + "\nx6: " + x6 + "\nx7: " + x7 + "\nx8: " + x8);


/* 자바스크립트에서 가장 중요한 데이터 타입은 객체
   객체는 이름-값 쌍(name-value pair)의 모음
   값 자리에는 아무 자바스크립트 값이나 올 수 있는 반면,
   이름은 반드시 자바스크립트 문자열이어야 한다. */
var book = {                // 객체는 중괄호로 둘러싸여 있다.
    topic: "JavaScript",    // "topic" 프로퍼티의 값은 "JavaScript"
    fat: true               // "fat" 프로퍼티의 값은 true
}

/* 객체의 프로퍼티는 .와 []를 사용해 접근할 수 있다. */
console.log(book.topic);    // JavaScript
console.log(book["fat"]);   // true: 객체의 프로퍼티 값에 접근하는 또 다른 방법

book.author = "Flanagan";   // 객체에 값을 할당함으로써 새 프로퍼티 생성
console.log(book.author);   // Flanagan

book.contents = {};         // {}는 프로퍼티가 없는 빈 객체
console.log(book.contents); // {}


/*  자바스크립트는 숫자로 색인된 목록의 값들을 담을 수 있는 배열도 지원 */
var primes = [2, 3, 5, 7];
console.log(primes[0]);                 // 2
console.log(primes.length);             // 4
console.log(primes[primes.length-1]);   // 7: 배열의 마지막 원소 값

primes[4] = 9;                          // 배열에 새 원소 값 추가
console.log(primes[4]);                 // 9

primes[4] = 11;                         // 기존에 저장된 배열 값 변경 
console.log(primes[4]);                 // 11

var empty = [];                         // 빈 배열
console.log(empty.length);              // 0


/* 배열과 객체는 각각 원소와 프로퍼티의 값으로 배열과 객체를 가질 수 있다 */
var points = [      // 배열에 두 원소가 있다
    {x:0, y:0},     // 각 원소는 객체
    {x:1, y:1}
];
var data = {    // 객체에 두 프로퍼티가 있다
    trial1: [[1,2], [3,4]],     // 각 프로퍼티의 값은 배열
    trial2: [[2,3], [4,5]]      // 배열의 각 원소는 배열
}


/* 연산자는 값(피연산자)들을 이용해 새 값을 산출
   가장 일반적인 산술 연산자 */
console.log(3 + 2);
console.log(3 - 2);
console.log(3 * 2);
console.log(3 / 2);
console.log(points[1].x - points[0].x);     // 1
console.log("3" + "2");     // 32

/* 자바스크립트는 몇 가지 산술 연산자 단출 표현식을 정의하고 있다 */
var count = 0;
count++;
count--;
count += 2;
count *= 3;
count;  // 변수 이름 또한 표현식

/* 등호와 관계 연산자는 두 값이 같거나 다른지, 작거나 큰지 등을 검사
   이들 표현식은 true나 false로 평가된다 */
var x = 2, y = 3;
console.log(x == y);
console.log(x != y);
console.log(x < y);
console.log(x <= y);
console.log(x > y);
console.log(x >= y);
console.log("two" == "three");
console.log("two" > "three");   // true: 알파벳순으로 봤을 때 "tw"는 "th"보다 크다!
console.log(false == (x > y));

/* 논리 연산자는 불리언 값들을 결합하거나 반전시킬 수 있다 */
console.log((x == 2) && (y == 3));
console.log((x == 2) || (y == 3));

