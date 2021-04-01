const fs = require('fs');

fs.writeFile('C:/Users/준영/Desktop/Node.js/3장/writem.txt' ,'글이 입력 됩니다.', (err)=>{
 if(err){
     throw err;
 }

 fs.readFile('C:/Users/준영/Desktop/Node.js/3장/writem.txt',(err, data)=>{
     if(err){
         throw err;
     }
     console.log(data);
     console.log(data.toString());
 });
});