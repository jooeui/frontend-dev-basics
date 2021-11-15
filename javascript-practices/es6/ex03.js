/* 
    Template Literal
*/

let no = 10;
let name = "피카츄";
let email = "pikachu@gmail.com";

// ex1
console.log("no: " + no + ", name: " + name + ", email: " + email);
console.log(`no: ${no }, name: ${name }, email: ${email }`);

// ex2: 다중 행 지원
console.log(`no: ${no }
name: ${name }
email: ${email }`);