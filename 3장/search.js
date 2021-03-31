const { URL } = require('url');

const myURL = new URL('https://www.google.com/search?q=WHATWG+%EB%B0%A9%EC%8B%9D&oq=WHATWG+%EB%B0%A9%EC%8B%9D&aqs=chrome..69i57j35i39j0l2j0i20i263l2j0l4.3600j0j4&sourceid=chrome&ie=UTF-8');

console.log('searchParams:', myURL.searchParams);

console.log('searchParams.getAll():',myURL.searchParams.getAll('sourceid'));

console.log('searchParams.get():',myURL.searchParams.get('ie'));

console.log('searchParams.has(): ', myURL.searchParams.has('page'));

console.log('searchParams.key():', myURL.searchParams.keys());

console.log('searchParams.values():', myURL.searchParams.values());

myURL.searchParams.append('filer', 'es3');
myURL.searchParams.append('filer', 'es5');

console.log(myURL.searchParams.getAll('filer'));

myURL.searchParams.set('filer', 'es6');
console.log(myURL.searchParams.getAll('filer'));

myURL.searchParams.delete('filer');
console.log(myURL.searchParams.getAll('filer'));

console.log('searchParams.toString():', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();
