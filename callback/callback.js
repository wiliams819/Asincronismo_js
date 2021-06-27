function suma(num1, num2){

    return num1 + num2;
}

function calc( num1, num2, callback){
   return callback(num1, num2);
}

document.write(calc(2,6, suma));




function date(callback){
    console.log(new Date);


    setTimeout(function (){
        let dato = new Date
        callback(dato);
    }, 3000)
}


function mostrar(Nuevodato){
  console.log(Nuevodato);
  
}
date(mostrar);