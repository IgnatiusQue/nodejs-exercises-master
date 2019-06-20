const os = require('os');
const fs = require('fs');

let cpu = os.cpus();
let platform = os.platform();
let user = os.hostname();
let info ='Info \n'+ JSON.stringify(cpu)+ '\n'+ platform + '\n'+ user;

fs.appendFile('file.txt', info ,function(error){
    if(error){
    console.log('File error');
}
})
console.log(cpu);