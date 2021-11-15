/* 
    Arrow Function
*/

const power = function(x) {
    return x * x;
}

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(n){
    process.stdout.write(`${n}:${power(n)}\t`);
});

// ex1
console.log("\n-------------------------------------");

numbers.forEach(function(n){
    // let result = (function(x){
    //     return x*x;
    // })(n);

    // let result = (x => {
    //     return x*x;
    // })(n);
    
    let result = (x => x*x)(n);

    process.stdout.write(`${n}:${power(n)}\t`);
});

// ex2
console.log("\n-------------------------------------");
numbers.forEach(n => process.stdout.write(`${n}:${(x => x*x)(n)}\t`));

// ex3
console.log("\n-------------------------------------");
[5, 3, 15, 1045, 43, 92].forEach(e => {
    if(e % 5 == 0) {
        process.stdout.write(`${e}\t`);
    }
})

// ex4 - this를 어휘적 바인딩(Lexical Bind)
console.log("\n-------------------------------------");
const pikachu = {
    name: "피카츄",
    friends: ['파이리', '꼬부기', '이상해씨', '버터플'],
    printFriends:function(){
        // this.friends.forEach(function(f){
        //     console.log(`${this.name}의 친구 ${f}`);
        // }.bind(this));

        this.friends.forEach(f => console.log(`${this.name}의 친구 ${f}`));
    }
}

pikachu.printFriends();