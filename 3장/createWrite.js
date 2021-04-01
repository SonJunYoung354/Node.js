const fs = require('fs');
// 읽기 스트림
const writeSt = fs.createWriteStream('C:/Users/준영/Desktop/Node.js/3장/writeme2.txt');
// 이벤트 리스너 등록 finish 라는 이벤트 생성 파일 쓰기 완료
/*writeSt.on('finish', () =>{
    console.log('파일 쓰기 완료');
});*/
console.log('파일쓰기완료');

//파일 쓰기

writeSt.write('이글을 씁니다\n');
writeSt.write('한 번 더 씁니다.');
writeSt.write('한 번 더 씁니다.');
writeSt.write('한 번 더 씁니다.');
writeSt.end();
