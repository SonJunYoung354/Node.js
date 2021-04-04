const http = require('http');
const fs = require('fs');

const users = {};

http.createServer((req,res) =>{
    //Get 메서드는 페이지 요청 하는것임으로 html 파일 읽어서 전송
    if(req.method === 'GET'){
        if(req.url === '/'){
            return fs.readFile('C:/Users/준영/Desktop/Node.js/4장/restFront.html', (err,data)=>{
                if(err){
                    throw err;
                }
                res.end(data);
            });
        } else if (req.url === '/about') {
            return fs.readFile('C:/Users/준영/Desktop/Node.js/4장/about.html', (err,data) => {
                if(err){
                    throw err;
                }
                res.end(data);
            });
        //AJAX 요청을 처리하는 /users 에서는 user 데이터 전송
        // JSON 형식으로 보내기 위해 (JSON.stringify(users) 사용
        }else if(req.url === '/users') {
            return res.end(JSON.stringify(users));
        }
        // html,css 파일이 있으면 데이터 전송 없으면 404 에러 응답
        return fs.readFile(`.${req.url}`, (err, data) => {
            if (err){
                res.writeHead(404, 'NOT FOUND');
                return res.end('NOT FOUND');
            }
            return res.end(data);
        });
        //POST와 PUT 메서드는 클라이언트로부터 데이터를 받음.
        // req.on('data',(data)=>{
        // return req.on('end' , () => {
        // READsTREAM으로 요청과 같이 들어오는 요청 본문을 받을수 있음. 단 문자열임으로 JSON으로 포멧 하는 JSON.parse 필수    
    }else if ( req.method === 'POST'){
        if(req.url === '/users'){
            let body = '';
            req.on('data',(data)=>{
                body += data;
            });
           
            return req.on('end',()=>{
                console.log('POST 본문(Body):',body);
                const { name } = JSON.parse(body);
                const id = +new Date();
                users[id] = name;
                res.writeHead(201);
                res.end('등록 성공');
            });
        }
    }else if(req.method === 'PUT') {
        if (req.url.startsWith('/users/')){
            const key = req.url.split('/')[2];
            let body = '';
            req.on('data', (data)=>{
                body += data;
            }); 
            return req.on('end' , () => {
                console.log('PUT 본문(body):',body);
                users[key] =JSON.parse(body).name;
                return res.end(JSON.stringify(users));
            });
        }
        // DELETE 메서드 요청이 들어오면
        //키에 해당하는 사용자 제거
    }else if(req.method === 'DELETE'){
        if(req.url.startsWith('/users/')){

            const key = req.url.split('/')[2];
            delete users[key];
            return res.end(JSON.stringify(users));
        }
    }
    res.writeHead(404, 'NOT FOUND');
    return res.end('NOT FOUND');
})
.listen(8085, () =>{
    console.log('8085');
});