const http = require('http');
// 쿠키 name=zeorcho;yer=11 이렇게 오니까
//객체로 바꾸는 함수
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

 


//출처: https://backback.tistory.com/326 [Back Ground]


//createServer 콜백에는 req 객체에 담겨있는 쿠키를 분석
//쿠키는 req.headers.cookie에 담겨져있음
//헤더에 쿠키를 담기위해 writeHead 사용
http.createServer((req,res, err) =>{
    const cookies = parseCookies(req.headers.cookie);
    console.log(req.url, cookies);
    //res.writeHead(200, {'Set-Cookie': 'mycookie=test'});
    res.writeHead(200, { 'set-Cokkie' : 'mycooke=test'});
    res.end('hello cookie');
    if(err){
        console.error(err);
    }
})
.listen(8111 , () => {
    console.log('포트 오픈');
});

