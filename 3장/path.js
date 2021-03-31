
const path = require('path');

const string = __filename;


console.log('path.sep:', path.sep);
console.log('path.delimiter:',path.delimiter);
console.log('-------------------------------------');

console.log('path.dirname():', path.dirname(string));
console.log('path.extname():' , path.extname(string));
console.log('pathbasename():', path.basename(string));
console.log('pathbasename():', path.basename(string, path.extname(string)));
console.log('---------------------------------------');

console.log('pathparse()', path.parse(string));
console.log('pathformat():', path.format({
    dir : 'C:\\Users\\준영\\Desktop\\Node.js\\3장',
    name : 'path',
    ext : '.js',
}));

console.log('path.normalize():', path.normalize('C:\\Users\\준영\\Desktop\\Node.js\\3장'));
console.log('----------------------------');
console.log('path.isAbsolute():' , path.isAbsolute('C:\\'));
console.log('path.isAbsolute():', path.isAbsolute('.\home'));
console.log('--------------------------------');
console.log('path.relative():', path.relative('C:\\Users\\준영\\Desktop\\Node.js\\3장', '/3장'));
console.log('path.join():', path.join(__dirname, 'C:\\'));
console.log('path.resolve()', path.resolve(__dirname, 'C:\\Users\\준영\\Desktop\\Node.js\\3장', 'Node.js'));