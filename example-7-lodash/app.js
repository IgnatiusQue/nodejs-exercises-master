
const _ = require('lodash');
let x = { "nombre": "Jaime" }
        let y = { "apodo": "MitoCode" }
        let z = [
            { nombre: "Jaime", apellido: "Medina", edad: 26 },
            { nombre: "Mito", apellido: "Code", edad: 26 }
        ]

        // Joint JSON
       let result = _.assign(x,y);
        console.log(result);
        //Repeat function
         _.times(3, ()=> console.log('Hello')); 


         // Find data 
         let resultado = _.find(z, {nombre: "Jaime", apellido: "Medina"});
         console.log(resultado);
          

