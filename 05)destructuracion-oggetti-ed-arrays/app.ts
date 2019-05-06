//Destrutturazione di oggetti
let avenger = {
    nome: "Steve",
    key: "Captain America",
    power: "Drug"
};

let { nome, key, power } = avenger;

/* let nome = avenger.name;
let key = avenger.key;
let power = avenger.power; */

console.log(nome, key, power);

//Destrutturazione di arrays
let avengers:string[] = ["Thor", "Steve", "Tony"];

let [ thor, capi, ironman ] = avengers;

console.log(thor, capi, ironman);
