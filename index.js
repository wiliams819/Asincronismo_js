//obtenemos materias
const materiashtml = document.querySelector(".materias");

//creamos un array que tiene datos que se usaran
const materia = [
    {
        Nombre:"Fisica",
        Nota: 7
    },{
        Nombre:"Biologia",
        Nota: 6
    },{
        Nombre:"Quimica",
        Nota: 5
    },{
        Nombre:"Matematica",
        Nota: 4
    },{
        Nombre:"Calculo",
        Nota: 9
    },{
        Nombre:"Estadistica",
        Nota: 10
    },{
        Nombre:"Termodinamica",
        Nota: 3
    }
];

//funcion flecha, con la promesa y mapeamos el objeto materia a la vaiable
//materias, luego hacemos la comparacion y mostramos reject con el mensaje
//y usamos setTimeout para simular tardanza en un servidor, por eso usamos 
//math y random. si fuera real no se usa el metodo
const ObtenerMateria = (id) =>{
    return new Promise((resolve, reject)=>{
      materias = materia[id];
      if(materias == undefined) reject("La materia no existe");
      else setTimeout(()=>{resolve(materias)},Math.random()*1100);

      
    })
}

/*const Devolver = async()=>{
    let Materia = [];
    for (let i = 0; i < materia.length; i++) {
        Materia[i] = ObtenerMateria(i);
        Materia[i].then(mat => console.log((mat)));        
    }
}*/

//creamos una funcion asincrona para devolver los resultados
//de materia, dentro creamos un arreglo llamado Materia en donde se almacenaran
// los datos que tiene el objeto materia(creado al principio)
//luego se recorre con un for

//en cada recorrido agramos await para que cuando se obtenga los datos de la funcion
//ObtenerMateria los almacene de manera en que es en el array Materia

//luego creamos una variable que tendra el html, en el mismo se agregara ${Materia[i].Nombre}
//y ${Materia[i].Nota} que son los que tienen los datos del objeto materia
//por ultimo la primera variable recibe el html de la segunda variable,esto en cada 
// vuelta del for  materiashtml.innerHTML += inyecccionhtml;
const Devolver = async()=>{
    let Materia = [];
    for (let i = 0; i < materia.length; i++) {
        Materia[i] = await ObtenerMateria(i);
       let inyecccionhtml= `
       <div class="materia">
       <div class="nombre">${Materia[i].Nombre}</div>
       <div class="nota">${Materia[i].Nota}</div>
   </div>`;
   materiashtml.innerHTML += inyecccionhtml;
    }
}

//devolvemos el metodo con todo lo ejecutado dentro
Devolver();