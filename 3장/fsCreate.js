// 파일 모듈 호출
const fs = require('fs');
//access 폴더나 파일에 접근 할수있는지 체크 (경로,옵션,콜백)
//F_OK => 파일 존재 여부 R_OK => 읽기 권한 여부 W_OK => 쓰기 권한 여부 체크
fs.access('C:/Users/준영/Desktop/Node.js/folder', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) =>{
    //콜백 함수 에러 발생시
    if(err){ 
        //파일 폴더가 없는 경우 'enoent' 에러 코드 출력
        if(err.code === 'ENOENT'){
            console.log('폴더 없음');
            //폴더 만드는 메서드( 경로,콜백) 에러를 콜백으로 넣음
            fs.mkdir('C:/Users/준영/Desktop/Node.js/folder',(err)=> {
                // 에러 메시지 출력
                if(err){
                    throw err;
                }
                console.log('폴더 만들기 성공');
                //파일의 아이디를 가져오는 메서드 (경로,옵션,콜백)
                //가져온 아이디를 가지고 read나 write() 읽을수 있음
                //옵션 : w 쓰기 r 읽기 a 기존 파일 추가
                fs.open('C:/Users/준영/Desktop/Node.js/folder/file.txt', 'w', (err,fd)=> {
                    if(err){
                        throw err;
                    }
                    if(fd){
                        const writeStream = fs.createWriteStream('C:/Users/준영/Desktop/Node.js/folder/file.txt');
                        writeStream.write("안녕하세요");
                   }
                
                console.log('빈 파일 만들기 성공' ,fd);
                //파일 이름을 바꾸는 메서드
                //( 기존 경로 , 새 경로, 콜백)
                fs.rename('C:/Users/준영/Desktop/Node.js/folder/file.txt','C:/Users/준영/Desktop/Node.js/folder/newfile1.txt', (err) =>{
                    if(err){
                        throw err;
                    }
                    console.log('이름 바꾸기 성공');
                    let data = fs.readFileSync('C:/Users/준영/Desktop/Node.js/folder/newfile1.txt');
                    console.log(data.toString());
                });
                });
            });
        }else{
            throw err;
        }
    }else{
        console.log('이미 폴더 있음');
    }
});