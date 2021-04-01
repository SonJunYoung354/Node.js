const crypto = require('crypto');
// 암호화 알고리즘 키를 넣어줌
const cipher = crypto.createCipher('aes-256-cbc','열쇠');
// 호화할 대상과 대상의 인코딩 출력 결과물의 인코딩을 넣어야함.
let result = cipher.update('암호화 할 문장 :', 'utf8','base64');
// final 인자 값에 인코딩을 넣어야함.
result += cipher.final('base64');
console.log('암호화', result);
// 복호화 할때 사용 인자 값으로 암호화 했던 알고리즘과 키값 그대로 넣어야함
const decipher = crypto.createDecipher('aes-256-cbc', '열쇠');
//복호화 할땐 반대로 인코딩 값과 출력 인코딩 값을 넣어야함.
let result2 = decipher.update(result, 'base64', 'utf8');
// 복호화 결과물 의 인코딩을 추가.
result2 += decipher.final('utf8');
console.log('복호화 :',result2);
