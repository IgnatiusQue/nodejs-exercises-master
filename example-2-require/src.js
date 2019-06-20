

let foo = 1234;
 


module.exports = {
    aString:"I am a json string in src.js module exports",
    aFunction:function (){console.log('I am a aFunction in  JSON module.exports of src.js file, hello ');}

}

module.exports.foo = foo;
module.exports.sayHello = function(){
    console.log('I am a sayHello function in the src.js file, hello ');
}
