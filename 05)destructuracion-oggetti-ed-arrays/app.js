"use strict";
//Destrutturazione di oggetti
var avenger = {
    nome: "Steve",
    key: "Captain America",
    power: "Drug"
};
var nome = avenger.nome, key = avenger.key, power = avenger.power;
/* let nome = avenger.name;
let key = avenger.key;
let power = avenger.power; */
console.log(nome, key, power);
//Destrutturazione di arrays
var avengers = ["Thor", "Steve", "Tony"];
var thor = avengers[0], capi = avengers[1], ironman = avengers[2];
console.log(thor, capi, ironman);
