//프로세스가 멈추는지 체크
setInterval(() => {
    console.log('시작');
    try{
        // 강제로 에러 발생
        throw new Error('서버를 고장내주마!');
    } catch(err){
        // 에러메 메시지 출력
        console.error(err);
    }

    // 1초마다 한번씩
}, 1000);