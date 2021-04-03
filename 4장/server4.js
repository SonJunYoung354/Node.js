const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');


// 쿠키를객체로 변환
const parseCookies = ( cookie = '' ) => 
    //console.log("cookie : ",cookie);
       cookie
        .split(';')
        .map( v => v.split('=') )
        .map( ([k, ...vs]) => [k, vs.join('=')] )
        .reduce( (acc, [k,v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
}, {});
    

http.createServer((req,res) => {
    const cookies = parseCookies(req.headers.cookie);;
    // 주소가 /loign 으로 시작할 경우
    if(req.url.startsWith('/login')){
        //querystring 모듈로 각각 주소와 주소에 딸려오는 qurey를 분석
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();
        //쿠키의 만료시간 설정
        expires.setMinutes(expires.getMinutes() + 5);
        //헤더에 302 응답 코드 리다이렉트 주소와 함께 쿠키를 헤더에 넣음
        //헤드는 한글을 설정할수없음으로 encodeURIComponent(name)으로 리코딩
        res.writeHead(302, {
            Location : '/',
            'Set-Cookie' : `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; path=/`, 
        });
        res.end();
        //그 외 경로로 접속했을때 쿠키가 있는지 없는지 확인
        //쿠키가 있다면 로그인 완료 페이지
        //res.end 에 한글이 들어가면 인코딩 문제로 옵션을 설정
    }else if(cookies.name){
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`${cookies.name}님 안녕하세요`);
         //쿠키가 없다면 로그인 페이지로 넘어감
    }else{
        fs.readFile('C:/Users/준영/Desktop/Node.js/4장/server2.html',(err,data) =>{
            if(err){
                throw err;
            }
            res.end(data);
        });
    }
})
.listen(8111, () => {
    console.log('포트 온');
});