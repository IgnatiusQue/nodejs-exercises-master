
const os = require('os');
const fs = require('fs');
const mi = require('./src'); // note not extension of js file

console.log(mi.foo);
mi.sayHello();
console.log(mi.aString);
mi.aFunction();