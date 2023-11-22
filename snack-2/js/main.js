'use strict';

//function

function randomNumber(num) { // funzione che genera numeri randomici da 1 a num
    const number = Math.floor(Math.random() * num + 1);
    return number;
}

//end function

const squadreCalcio = [ // array di squadre
    { nome: 'toro', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'juventus', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'napoli', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'milan', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'inter', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'frosinone', puntiFatti: 0, falliSubiti: 0 },
]

squadreCalcio.forEach((squadra) => { // assegno valori random ai punti e ai falli
    squadra.puntiFatti = randomNumber(30);
    squadra.falliSubiti = randomNumber(12);
})

console.log(squadreCalcio[3]);

const nomeSquadraFalli = squadreCalcio.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));  // creo un nuovo array con solo nomi e falli

console.log(nomeSquadraFalli);


