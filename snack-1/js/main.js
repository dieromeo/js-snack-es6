'use strict';

const biciclette = [   // array di oggetti bici
    { nome: 'graziella', peso: 7.5 },
    { nome: 'bici da corsa', peso: 3 },
    { nome: 'bici elettrica', peso: 20 },
    { nome: 'mountain bike', peso: 12.2 }
]

let pesoMinore = Infinity;
let biciPesoMinore = '';
const divContainer = document.querySelector('.container');

biciclette.forEach((bici) => { // cicla gli oggetti
    const { nome, peso } = bici; // destructuring
    if (peso !== 0) { // controllo che il peso non sia 0

        if (peso < pesoMinore) { // se è minore ne salvo il peso e il nome
            pesoMinore = peso;
            biciPesoMinore = nome;
        }
    }
})

// stampa a schermo
const divContent = `<h2> La bici con il peso minore è: ${biciPesoMinore} </h2> <p> Il suo peso è: ${pesoMinore} kg </p>`;
divContainer.innerHTML += divContent;
