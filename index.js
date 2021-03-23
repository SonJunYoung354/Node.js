const { odd, even } = require('C:/Users/준영/Desktop/Node.js/var');
const checkNumber = require('C:/Users/준영/Desktop/Node.js/func');

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd;
    }
    return even;
}
console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));