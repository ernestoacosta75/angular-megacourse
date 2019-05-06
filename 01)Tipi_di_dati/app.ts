let nombre:string = "Peter";
let numero:number = 123;
let booleano:boolean = true;

// Tipi di dati strutturati
let hoy:Date = new Date();

hoy = new Date('2020-10-21');

console.log(hoy);

//Tipo di dato any
let cualquiera:any;

cualquiera = nombre;
cualquiera = numero;
cualquiera = hoy;

//Oggetti
let spiderman = {
    nombre: "Peter",
    edad: 20
}