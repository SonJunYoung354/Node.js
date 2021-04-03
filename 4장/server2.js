// 모듈 불러옴
const http = require('http');
const fs = require('fs');

//http 모듈 내부 서버 생성 콜백 함수로 응답 요청 
http.createServer((req,res) =>{
    // fs 모듈의 파일 읽어오기 콜백 함수로 에러 데이터

    fs.readFile('C:/Users/준영/Desktop/Node.js/4장/server2.html',(err,data)=>{
        //에러 표시
        if(err)
        console.error(error);
     //서버 응답으로 읽어온 데이터 표시
     res.end(data);
    });
    // 서버 오픈
}).listen(8111, () => {
    console.log('포트 대기중');
});