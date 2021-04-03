// 이벤트 모듈 호출
const EventEmitter = require('events');

// 이벤트 객체 생성
const myEvent = new EventEmitter();
// event.on과 기능 동일
myEvent.addListener('event1',() => {
    console.log('이벤트1');
});
//이벤트 이름과 이벤트 발생시 콜백을 연결해줌. [ 이벤트 리스닝 ] 이라고함 
//event2 처럼 여러개 만들수 있음.
myEvent.on('event2',() =>{
    console.log('이벤트2');
});
myEvent.on('event2 ', () =>{
    console.log('이벤트 2 추가');
});

//이벤트 를 호출하는 메서드 이벤트 이름을 인자로 넣어주면 댐
myEvent.emit('event1');
myEvent.emit('event2');
// 이벤트가 한번만 실행되는 이벤트
myEvent.once('event3' , () =>{
    console.log('이벤트 3');
});
// once로 등록해놔서 한번만 실행함
myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4', () => {
    console.log('이벤트4');
});
//이벤트에 등록된 리스너 제거 당연히 콜백도 실행되지 않음
myEvent.removeAllListeners('event4');
myEvent.emit('event4');

const listener = () =>{
    console.log('이벤트 5');
};

myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5');
// 리스너가 몇개 등록되어있는지 확인.
console.log(myEvent.listenerCount('event2'));
