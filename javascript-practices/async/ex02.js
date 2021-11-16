const ex02 = function(param) {
    /* 
        비동기 코드
        - 파일 시스템 접근, 네트워크 통신, SQL to DB, setTimeout
    */
   return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(param === 'param-data'){
                resolve('ok');
            } else {
                reject(new Error('fail'));
            }
        }, 2000);
    });
}

if(require.main == module) {
    // test01: success
    ex02('param-data').then(function(res){  // then은 성공한 경우
        console.log(res);
    });
    
    // test03: fail
    ex02('param-data').catch(function(error){
        console.error(error);
    });
    
    // 일반적으로..!
    /* 
    ex02('...')
        .then(res => {
    
        })
        .catch(err => {
    
        }); 
    */
} else {
    module.exports = ex02;
}



console.log('wait...');