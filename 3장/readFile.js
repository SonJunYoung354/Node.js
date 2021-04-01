const fs = require('fs');

fs.readFile('C:/Users/준영/Desktop/Node.js/3장/readme.txt',  (err, data) => {
    if (err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});