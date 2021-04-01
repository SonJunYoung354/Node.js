const fs = require('fs');
// 읽기 스트림 제작
//highWaterMark 바이트 크기 제한
const readStream = fs.createReadStream('C:/Users/준영/Desktop/Node.js/3장/readme2.txt', {highWaterMark : 16});
//배열 선언
const data = [];
//readStream은 이벤트 리스너를 붙여서 사용 보통 data.err.end 이벤트 사용
//파일 읽기 도중 에러가 발생하면 err 이벤트 호출 읽기 시작하면 data 이벤트 발생

//텍스트 파일에 '저'라는 단어를 배열에 푸시 16 바이트씩 나눠서 출력 그후 저 라는 버퍼와 길이 출력
readStream.on('data', (저)=>{
    data.push(저);
    console.log('data:', 저,저.length);
});

//끝나면 원본 상태의 텍스트 파일 출력
readStream.on('end',() => {
    console.log('end:', Buffer.concat(data).toString());
});

//에러 메시지 출력
readStream.on('error',(err)=> {
    console.log('error:',err);
});