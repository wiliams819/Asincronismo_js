class Persona{
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

const data = [
    ["Wiliams Alexander","@alex"],
    ["Lucas Dalto","@soyDalto"],
    ["Armando Paredes","@paredes"],
    ["Mila nesa","@milanesa"],
    ["Juan Perez","@perezjuan"]
];

const personas = [];

for (let i = 0; i < data.length; i++) {
   personas[i] = new Persona(data[i][0], data[i][1]);
}

const obtenerPersona = (id)=>{
    return new Promise((resolve, reject)=>{
        if (personas[id].nombre == undefined) reject("La persona no existe");
        else{ resolve(personas[id].nombre)};
    })
};

const obtenerIg = (id)=>{
    return new Promise((resolve, reject)=>{
        if (personas[id].instagram == undefined) reject("el instagram no existe"); 
        else{ resolve(personas[id].instagram);}
    })
};

let id = 4;
obtenerPersona(id).then((persona)=>{
  console.log(persona);
   return obtenerIg(id);
}).then((instagram)=>{
    console.log(instagram);
}).catch((e)=>{
   console.log(e)
});


