const util = require('util');
const crypto = require('crypto');



const dontUseMe = util.deprecate ((x,y) => {
  console.log(x + y);
}, ' dontUseMe 함수는 deprecaated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1,2);


const readomBytesPromise = util.promisify(crypto.randomBytes);
readomBytesPromise(64);

then((buf) => {
    console.log(buf.toString('base64'));
});

