const http = require('http');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`마스터 프로세스 아이디 : ${process.pid}`);
    //cpu 코어 갯수만큼 생성
    for (let i = 0 ; i < numCPUs; i +=1 ) {
        // 시프때 배운 fork 와 동일 개념
         cluster.fork();
    }
    //exit 이벤트 프로세스가 종료되면
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
    });
} else {
    http.createServer(( req, res ) => {
        res.write('<h1>안녕ㅇㅇㅇㅇㅇㅇ</h1>');
    }).listen(8050);
    setTimeout(()  => {
        process.exit(1);
    },1000); 
    console.log(`${process.pid}번 워커 실행`);
}
