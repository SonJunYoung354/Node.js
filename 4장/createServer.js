const http = require('http');

// 서버 요청에 따른 콜백함수 생성
 const server = http.createServer((req,res) =>{

    res.write('<h1>hello Node</h1>');
    //응답 종료
    res.end('<h1>hello node</h1>');

});
// 서버 리스너 생성 
server.listen(8111);
// 이벤트 생성
server.on('listening',() =>{
    console.log('8111');
});
server.on('error',(error) =>{
    console.error(error);
});