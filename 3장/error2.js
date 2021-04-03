// 모듈 
const fs = require('fs');
//전역 변수
var a = 0;
// 변수 안에 함수 값 집어넣음
// var  req = setInterval(() => {
//     //파일 읽기
//     fs.unlink('C:/Users/준영/Desktop/Node.js/3장/123.txt',(err) =>{
//         //에러구문
//         if(err){
//             //반복문 멈추기위해 증가값 추가
//             a++;
//             console.error(err);
//         }
        
//         if(a > 2){
//             console.log('종료');
//             //반복문 종료 메서드
//             clearInterval(req);
//         }
//     });

// }, 1000);



setInterval(() =>{
    fs.unlink('C:/Users/준영/Desktop/Node.js/3장/123.txt',(err) =>{
        if(err){
            a++;
            console.error(err);
        }
        if(a > 2){
            console.log('종료');
            process.exit();
        }
    });

}, 1000);