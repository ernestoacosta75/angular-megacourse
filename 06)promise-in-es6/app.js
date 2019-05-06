"use strict";
//Dichiarazione di una promise
let prom1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Promise finita");
        //Finisce bene
        resolve();
        //Finisce male
        //reject();         
    }, 1500);
});
console.log("Passo 1");
prom1.then(function () {
    console.log("Eseguire quando tutto finisce bene!");
}, function () {
    console.error("Eseguire quando tutto finisce male!");
});
console.log("Passo 2");
