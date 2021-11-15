/* 
    4. default parameter
*/

const print = function(strs, end="\n") {    // end 값이 넘어오지 않으면 default로 '\n', end 값이 넘어오면 넘어온 값으로 실행
    console.log(strs.join(end));
}

print(["Always", "with", "me"]);
print(["Always", "with", "me"], " ");