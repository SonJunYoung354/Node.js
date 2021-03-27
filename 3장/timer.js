const timeout = setTimeout(() => {
    console.log('1.5초후 실행');
}, 1500);

const interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다');
},3000);
// setTimeout == 2.5초 뒤에 clear 함수 실행
// 따라서 코드 실행 2.5초 뒤에 멈춤
setTimeout(() => {
    //Set Time out 취소
    clearTimeout(timeout2);
    //setInterval 취소
    clearInterval(interval);
},2500);


const immediate = setImmediate(() => {
    console.log('즉시실행');
});

const immediate2 = setImmediate(() => {
    console.log('실행되지 않습니다');
});
//set Immediate 취소
clearImmediate(immediate);