//clase con parametros de nombre e instagram, se inicializan
class Persona{
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}
//objeto con objetos, estos tienen un nombre y usuario de instagram
const data = [
    ["Wiliams Alexander","@alex"],
    ["Lucas Dalto","@soyDalto"],
    ["Armando Paredes","@paredes"],
    ["Mila nesa","@milanesa"],
    ["Juan Perez","@perezjuan"]
];

//se crea un objeto personas que tendra dentro los datos de data
const personas = [];

//se recorre el objeto personas, en cada vuelta se agrega lo que tiene data es por eso
//que se crea un objeto de tipo Persona y dentro tiene, el nombre e instagram.
// data[i][0] esta de esa manera, por que el pirmer indice recorre los objetos, y el otro
//es el indice cero(donde esta el nombre), al igual que el otro que es data[i][1]
//primer indice entra a los objetos de data, y el segundo entra al segundo indice
//de cada objeto el cual seria instagram, con esto se tiene todos los parametros
for (let i = 0; i < data.length; i++) {
   personas[i] = new Persona(data[i][0], data[i][1]);
}

//funcion flecha, recibe como parametro "id",creamos una promesa que
//retroen y comparamos
//si personas[id] es igual a undefined, entonces que se muestre el reject
// y si no se cumple la condicion, mostramos resolve, con el objeto persona
//[id].nombre, ya que id tiene a dos datos, nombre e instagram
//por eso el .nombre despues de id
const obtenerPersona = (id)=>{
    return new Promise((resolve, reject)=>{
        if (personas[id].nombre == undefined) reject("La persona no existe");
        else{ resolve(personas[id].nombre)};
    })
};

//igual que la funcion anterior solo que con instagram
const obtenerIg = (id)=>{
    return new Promise((resolve, reject)=>{
        if (personas[id].instagram == undefined) reject("el instagram no existe"); 
        else{ resolve(personas[id].instagram);}
    })
};
//varibable que tiene el indice, cada numero respresenta un lugar en el objeto
//personas, por el el uno, que se mostraria Lucas Dalto y @soyDalto
let index = 1;

//este bloque es una nueva promesa, usamos then para entrar a los datos que tiene la 
//promesa, y lo mostramos en consola. usamos persona como parametro que recibe then
//para revisarlo y mostrarlo. luego usamos otra vez then para comprobar que instagram 
//tiene datos, y si lo tiene lo muestra tambien en consola. si hay error usamos solo 
//un catch para todos errores que puedan haber, el primero maneja nombre, el segundo 
//maneja el instagram
obtenerPersona(index).then((persona)=>{
  console.log(persona);
   return obtenerIg(index);
})//aca finaliza una promesa, promesa retornada
.then((instagram)=>{
    console.log(instagram);
}).catch((e)=>{
   console.log(e)
});


