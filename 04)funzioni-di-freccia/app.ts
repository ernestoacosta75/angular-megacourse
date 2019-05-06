//Funzione normale
let myFunction = function ( a:any ) {
    return a;
}

//Equivalente funzione di freccia
let myFunctionF = ( a:any ) => a;

//Funzione di freccia con più di un parametro ed una sola istruzione
let myFunction2 = (a:number, b:number) => a + b;

let myFunction3 = function( nombre:string ) {
    nombre = nombre.toUpperCase();
    return nombre;
}
//Funzione di freccia con più di un parametro ed più di una istruzione
let myFunction3F = (a:string) =>  {
    a = a.toUpperCase();
    return a;
}

let hulk = {
    nombre: "Hulk",
    smash() {
        setTimeout( () => console.log(this.nombre + " smash!"), 1500);
    }
};

console.log(myFunction("Normal"));
console.log(myFunctionF("Arrow"));
console.log(myFunction2(1, 2));
console.log(myFunction3("Normal"));
console.log(myFunction3F("Arrow"));
hulk.smash();