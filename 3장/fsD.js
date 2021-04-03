// 모듈 호출
const fs = require('fs');
//폴더 안의 내용물 확인.
fs.readdir('C:/Users/준영/Desktop/Node.js/folder',(err,dir) => {
    if(err){
        throw err;
    }

    console.log('폴더 내용 확인',dir);
   //파일을 지울수 있음. 없으면 에러가 발생
    fs.unlink('C:/Users/준영/Desktop/Node.js/folder/newfile1.txt',(err) => {
        if(err){
            throw err;
        }
        console.log('파일 삭제 성공');
    //폴더를 지울수 있음. 폴더안에 파일 존재시 에러
           fs.rmdir('C:/Users/준영/Desktop/Node.js/folder', (err) =>{
         if(err){
             throw err;
          }
          console.log('폴더 삭제 성공');
        });
    });
});

