const fs = require('fs');

console.log('시작');

const data = fs.readFileSync('C:/Users/준영/Desktop/Node.js/3장/readme2.txt');
console.log('1번',data.toString());
data = fs.readFileSync('C:/Users/준영/Desktop/Node.js/3장/readme2.txt');
console.log('2번',data.toString());
data = fs.readFileSync('C:/Users/준영/Desktop/Node.js/3장/readme2.txt');
console.log('3번',data.toString());
console.log('끝');