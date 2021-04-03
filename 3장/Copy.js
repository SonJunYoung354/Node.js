
// 모듈 호출
const fs = require('fs');
// 복사 메서드  인자값으로 두개의 경로를 던져주고 콜백 함수로 에러 구문 출력 추가.
fs.copyFile('C:/Users/준영/Desktop/Node.js/3장/readme.txt', 'C:/Users/준영/Desktop/Node.js/readme.txt' , (error) => {
    if(error){
        return console.log(error);
    }
    console.log('복사 완료');
});