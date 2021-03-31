const url = require('url');

const querysirng = require('querystring');

const oarsed = url.parse('https://www.google.com/search?q=WHATWG+%EB%B0%A9%EC%8B%9D&oq=WHATWG+%EB%B0%A9%EC%8B%9D&aqs=chrome..69i57j35i39j0l2j0i20i263l2j0l4.3600j0j4&sourceid=chrome&ie=UTF-8');

const query = querysirng.parse(oarsed.query);
console.log('querysirng.parse():', query);
console.log('querystring.stringify():', querysirng.stringify(query));
