//Dichiarazione di una classe
class Avenger {
    //Properties
    nome:string;
    team:string;
    realName:string;
    canFight:boolean = false;
    scoreWined:number = 0;

    //Construtttors
    constructor( nome:string, team:string, realName:string) {
        this.nome = nome;
        this.team = team;
        this.realName = realName;
    }
}

let antman:Avenger = new Avenger( "AntMan", "cap", "Scott Lang" );

console.log(antman);