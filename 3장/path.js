
const path = require('path');

const string = __filename;

//경로의 구분자 표시
console.log('path.sep:', path.sep);
//환경 변수의 구분자 표시 윈도우 ; 리눅스 계열 :
console.log('path.delimiter:',path.delimiter);
console.log('-------------------------------------');
//파일이 위치한 폴더 경로 표시
console.log('path.dirname():', path.dirname(string));
//파일의 확장자 표시
console.log('path.extname():' , path.extname(string));
//파일의 이름 확장자 포함을 불러옴 파일의 이름만 표시한다면 파일의 확장자를 넣어주면댐
console.log('pathbasename():', path.basename(string));
console.log('pathbasename():', path.basename(string, path.extname(string)));
console.log('---------------------------------------');
//파일의 경로를 orrt dir base ext name으로 표시
console.log('pathparse()', path.parse(string));
// pathparse()를 객체로 묶어서 표시
console.log('pathformat():', path.format({
    dir : 'C:\\Users\\준영\\Desktop\\Node.js\\3장',
    name : 'path',
    ext : '.js',
}));
// 경로를 여러번 사용하거나 혼용했을때 정상적인 경로로 변환해줌
console.log('path.normalize():', path.normalize('C:\\Users\\준영\\Desktop\\Node.js\\3장'));
console.log('----------------------------');
// 파일의 경로가 상대경로인지 절대 경로인지 ture , false 타입으로 표현
console.log('path.isAbsolute():' , path.isAbsolute('C:\\'));
//
console.log('path.isAbsolute():', path.isAbsolute('.\home'));
console.log('--------------------------------');
// 경로 인자를 두개 던져서 두번째 인자 경로로 가는 방법을 알려줌.
console.log('path.relative():', path.relative('C:\\Users\\준영\\Desktop\\Node.js\\3장', '/3장'));
// 여러 인자 경로로 넣으면 하나의 경로로 합쳐줌
console.log('path.join():', path.join(__dirname, 'C:\\'));
// path.join() 차이점이 있는데 그 이후 설명해줌
console.log('path.resolve()', path.resolve(__dirname, 'C:\\Users\\준영\\Desktop\\Node.js\\3장', 'Node.js'));

