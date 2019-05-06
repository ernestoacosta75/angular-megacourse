"use strict";
//Dichiarazione di una classe
class Avenger {
    //Construtttors
    constructor(nome, team, realName) {
        this.canFight = false;
        this.scoreWined = 0;
        this.nome = nome;
        this.team = team;
        this.realName = realName;
    }
}
let antman = new Avenger("AntMan", "cap", "Scott Lang");
console.log(antman);
