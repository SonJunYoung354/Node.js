//from 문자열을 버퍼로 바꿀수있음
const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log('from():',buffer);
//버퍼의 크기 알려줌. 바이트 단위
console.log('legth:', buffer.length);
//버퍼를 문자열로 변환
console.log('tostring():',buffer.toString());

const array = [Buffer.from('띄엄'),Buffer.from('띄엄'),Buffer.from('쓰기')];
//배열에 든 버퍼를 하나로 합침
const buffer2 = Buffer.concat(array);
console.log('concat():',buffer2.toString());
//빈 버퍼를 생성 단위 바이트
const buffer3 = Buffer.alloc(5);
console.log('alloc():', buffer3)