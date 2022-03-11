/**
 * 
    A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

    Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

 * 
 */

const array = [
    'pippo',
    'PLUTO',
    'Paperino',
    'GAtto'
];


// Stampo l'array originale
array.forEach((element) => {
    console.log(element);
});

// Rendo la prima lettera Maiuscola e inserisco gli elementi in un nuovo arrary
const secondArray = array.map((element) => {
    return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
});

// Stampo il nuovo array
secondArray.forEach((element) => {
    console.warn(element);
});