function add(a,b, callback){ // 콜백 함수 선언
    // a,b 인자 더하는 결과 값 변수 저장
    var result = a + b;
    // 결과 값 호출
    callback(result);
}
// add 함수에 인자값 전달
add(10,10, function(result){
  console.log('파라미터로 전달된 콜백 함수 호출');
  console.log('더하기 (10,10)의 결과 %d',result);
});