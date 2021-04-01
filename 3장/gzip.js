// 모듈 호출
const zlib = require('zlib');
const fs = require('fs');
// 텍스트 파일의 버퍼를 읽어옴
const readStream = fs.createReadStream('C:/Users/준영/Desktop/Node.js/3장/readme4.txt');
// 새로운 Gzip 객체 반환
const zlibStream = zlib.createGzip();
// 텍스트파일 옵션에 gz 추가
const writeStream = fs.createWriteStream('C:/Users/준영/Desktop/Node.js/3장/readme4.txt.gz');
//버퍼 데이터가 전달되더가 gzip 압축을 거친후 파일로 쓰여짐
readStream.pipe(zlibStream).pipe(writeStream);