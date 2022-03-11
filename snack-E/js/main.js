/**
 *
 *
    Crea un array di oggetti che rappresentino delle persone.
    Ogni persona ha un nome, un cognome e un'età.
    
    Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
 */

const persone = [
    {
        nome: 'Paolo',
        cognome: 'De angelis',
        eta: 32,
    },
    {
        nome: 'Luca',
        cognome: 'Mattei',
        eta: 16,
    },
    {
        nome: 'Vincenzo',
        cognome: 'Petti',
        eta: 25,
    },
    {
        nome: 'Simone',
        cognome: 'Martucci',
        eta: 18,
    },
    {
        nome: 'Giovanni',
        cognome: 'Ferraioli',
        eta: 29,
    },
    {
        nome: 'Cristian',
        cognome: 'De sio',
        eta: 23,
    },
];

persone.forEach( (element, index) => {
    console.log(`persona: ${index}`);
    //console.log(`${element.nome} ${element.cognome} ${element.eta}`); // alternativa al for in
    for (key in element){
        console.log(element[key]);
    }
});

// Creo un nuovo array per non sovrascivere l'originale
const addPropertyPersone = persone;
addPropertyPersone.forEach((element) => {
    if (element.eta < 18){
        element.descrizione = `Mi dispiace ma non hai raggiunto la maggior età per poter guidare. Età: ${element.eta}`;
    } else{
        element.descrizione = `Hai un età sufficiente alla guida. Tua età: ${element.eta}`;
    }
});


addPropertyPersone.forEach( (element, index) => {
    console.warn(`persona: ${index}`);
    for (key in element){
        console.log(element[key]);
    }
});