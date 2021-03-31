
// os 모듈 호출
const os = require('os');
// 아래 os모듈의 메서드 정보
console.log('운영체제 정보----------------------------');
//process.arch 와 동일
console.log('os.arch()', os.arch()); 
// process.platform와 동일
console.log('os.platform()', os.platform());
// 운영체제의 정보를 보여줌
console.log('os.type()', os.type());
// 운영체제 부팅 이후 흐른 시간을 보여줌
// process.uptime()은 노드 프로세스 실행시간
console.log('os.uptime()', os.uptime());
// 컴퓨터의 이름
console.log('os.hostname() :', os.hostname());
//운영체제의 버전
console.log('os.release():', os.release());


console.log('경로----------------------------');
//홈 디렉토리(폴더) 의 경로 보여줌
console.log('os.homedir():', os.homedir());
//임시 파일 저장 경로
console.log('os.tmpdir() :',os.tmpdir());



console.log('cpu 정보----------------------------');
//컴퓨터의 코어 정보
console.log('os,cpus(): ',os.cpus());
console.log('os.cpus().length:', os.cpus().length);

console.log('메모리 정보----------------------------');
//사용 가능한 메모리 보여줌
console.log('os.freemem(): ',os.freemem());
//전체 메모리 용량
console.log('os.totaleme():',os.freemem());

console.log(os.constants);