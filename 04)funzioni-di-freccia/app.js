"use strict";
//Funzione normale
var myFunction = function (a) {
    return a;
};
//Equivalente funzione di freccia
var myFunctionF = function (a) { return a; };
//Funzione di freccia con più di un parametro ed una sola istruzione
var myFunction2 = function (a, b) { return a + b; };
var myFunction3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
//Funzione di freccia con più di un parametro ed più di una istruzione
var myFunction3F = function (a) {
    a = a.toUpperCase();
    return a;
};
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!"); }, 1500);
    }
};
console.log(myFunction("Normal"));
console.log(myFunctionF("Arrow"));
console.log(myFunction2(1, 2));
console.log(myFunction3("Normal"));
console.log(myFunction3F("Arrow"));
hulk.smash();
