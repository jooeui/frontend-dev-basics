const ex02 = require('./ex02'); // 얘는 ex02의 모든 소스코드(success, error 예제 코드 모두)를 실행하게 됨

const ex03 = async function(param) {
    try {
        const res = await ex02(param);
        console.log(res);
    } catch(err) {
        console.error(err);
    }
}

ex03("param-data");
ex03("param-errpr");

console.log("wait...")