const string = 'abc';
const number = 1;
const bollean = true;

const obj ={
    oustside :{
        inside :{
            key : 'value',
        },
    },
};

const obj2 ={
    inside :{
        outside :{
            sidein :{
                sideout :{
                    key : 'ture',
                },
            },
        },
    },
};

// console.time(레이블) : console.timeEND(레이블)과 대응되어 같은 레이블을 가진 timeEnd 사이의 시간을 측정함.
console.time('전체시간');
// console.log(내용) 평범한 로그를 콘솔에 표시 console.log(내용,내용) 처럼 여러 내용을 동시에 표시 가능
console.log('평범한 로그 입니다');
// console.log(변수) 변수 또한 로그를 콘솔에 표시 가능
console.log(string,number,bollean);
// console.error(에러내용) 에러를 콘솔에 표시함
console.error('에러메시지는 consle.error에 담아주세요');
// console.dir(객체,옵션) 객체를 콘솔에 표시할때 사용
// 첫번째 인자로 객체를 넣고 두번째 인자로 옵션을 넣음 옵션의 colors를 ture로 하면 콘솔에 색이 추가되어 한결 보기가 편해짐 depth는 객체를 몇단계까지 보여줄지 결정 디폴트 2
console.dir(obj, { colors : false, depth : 2});
console.dir(obj, { colors : true, depth : 1 });

console.dir(obj2, { colors : true, depth : 3});

console.time('시간 측정');
for (let i= 0; i < 10000; i++){
    continue;
}

console.timeEnd('시간 측정');

function b(){
    // consle.trace(레이블) 에러가 어디서 발생했는지 추적 할 수 있게 해줌 보통 에러 발생시 에러 위치를 알려줌
    console.trace('에러위치 추적');
}
function a(){
    b();
}

a();
console.timeEnd('전체 시간');
