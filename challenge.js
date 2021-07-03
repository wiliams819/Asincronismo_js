/* 

Con fetch
const getName = async ()=>{
try{
    let peticion = await fetch("https://rickandmortyapi.com/api/character/")
    let resultado = await peticion.json();
    console.log(resultado.info.count);
}
catch(e){
console.log("no funciona")
}

}
getName()




const peticion = async ()=>{
try{
    let resultado = await axios("https://rickandmortyapi.com/api/character/")
    console.log(resultado.data.info.next);
}
catch(e){
    console.log("la api no funciona correctamente")
}
  
}

peticion()
*/




