//process 객체에 리스너 등록
process.on('uncaughtException' ,(err) => {
    console.error('예기치 못한 에러 ',err);
});
//프로세스 종료 확인
setInterval(() =>{
    throw new Error('서버를 고장내주마');

},1000);

// 종료
setTimeout(() => {
    console.log('실행됩니다');
},2000);