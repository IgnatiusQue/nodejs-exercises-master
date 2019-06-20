const fs = require('fs');
console.log('Start');  
//Async by default 
fs.readFile('data.txt','utf-8', (error,data)=>{
if(error){
    console.log('Error ${error}');  
}else{
    console.log(data);  
}
});
console.log('End');  


// file rename 

fs.rename ('data.txt','data.txt',(error)=>{
    if(error)throw error
        console.log('File Renamed');  
    
});


// Copy file 
fs.createReadStream('data.txt').pipe(fs.createWriteStream('data.copy.txt'));


// Kill file
fs.unlink ('data.copy.txt',(error)=>{
    if(error)throw error
        console.log('File deleted');  
    
});

// Show  files in folder

fs.readdir('../example-4-file-system-async', (error, files)=>{
    files.forEach(file => {
        console.log(file);
    });
});