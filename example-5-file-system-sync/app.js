const fs = require('fs');
console.log('Start');  

//Read file 
let data =fs.readFileSync('data.txt','utf-8'); 
console.log(data);  

// Read dir
fs.readdirSync('../example-5-file-system-sync').forEach(file => {
    console.log(file);
});

 
console.log('End');  


