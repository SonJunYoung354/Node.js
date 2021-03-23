const { odd, even } = require('C:/Users/준영/Desktop/Node.js/var');

function checkOddOrEven(num){
    if (num % 2) {
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;

/*improt { odd , even } from '.var';

function checkOddOrEven(num){
    if (num % 2) {
        return odd;
    }
    return even;
} es2015 모듈 문법 변경점 확인
export default checkOddOrEven;/*