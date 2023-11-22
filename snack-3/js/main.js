'use strict';

/*
Creo un array di n elementi, ed una funzione che prenda come valori l'array, un numero minimo ed uno massimo.
La funzione ritornerà, tramite l'utilizzo della proprietà `filter` tutti gli elemeni in posizione copresa tra i due numeri.
*/

const myArray = ['sedie', 'tavolo', 'divano', 'poltrona', 'comodino', 'mensola', 'scaffale'];

function arrayValueBetween(arr, numMin, numMax) {
    return arr.filter((element, index) => index >= numMin && index <= numMax); // solo valore con indice compreso tra min e max
}

const prova = arrayValueBetween(myArray, 1, 3);
console.log(prova);