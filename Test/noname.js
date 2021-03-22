var CandyMachine = {
		status:{
			name: 'node',
			count: 5,
		},
		getCandy: function(){
			this.status.count--;
			return this.status.count;
		}
};
var getCandy = CandyMachine.getCandy;
var count = CandyMachine.status.count;
function hello(){
	console.log('hello');
	hello1();
}
function hello1(){
	console.log('by');
	
}
hello();
