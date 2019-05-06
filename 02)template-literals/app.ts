function getNombre() {
    return "Fernando";
}

let nombre:string = "Juan";
let apellido:string = "Perez";
let edad:number = 32;

let testo = `Hola, ${nombre} ${apellido} (${edad})`;
let testo2:string = `${ 1 + 2 }`;
let testo3:string = `${ getNombre() }`;


console.log(testo);
console.log(testo2);
console.log(testo3);

