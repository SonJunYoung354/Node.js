const https = require('https');
const fs = require('fs');
const { readdirSync } = require('node:fs');

// 서버 요청에 따른 콜백함수 생성
https.createServer({
    cert : fs.readFileSync('도메인 인증서 경로');
    key : fs.readFileSync('도메인 비밀키 경로'),
    ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ],

}, (res , req) => {
    res.write('<h1>hello node</h1');
    res.write('<p>??????????????');
}).listen (443, () => {
    console.log(' 443 ');
})