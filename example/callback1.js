function multiply(a,b, callback){
    // a*b 곱한 결과값을 변수에 저장
    var result = a*b;
    callback(result);


var history = function(){
    return a + '*' + b + '=' + result;
}

return history
}

var multi_history = multiply(10,10,function(result){
    console.log(result);
});

console.log('결과값으로 받은 함수 실행 결과 :' + multi_history());