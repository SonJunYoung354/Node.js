const url = require('url');

const URL = url.URL;

const myURL = new URL('https://www.naver.com/');
console.log('newURL():', myURL);
console.log('url.fomat(): ', url.format(myURL));

const parsedUrl = url.parse('https://www.naver.com/');

console.log('url.parse(): ', parsedUrl);
console.log('url.format():',url.format(parsedUrl));
