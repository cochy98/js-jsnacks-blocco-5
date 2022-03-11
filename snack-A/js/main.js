/**
    Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

    Generare casualmente le statistiche di gioco, secondo queste regole:

    A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

    B - la media punti fatti per partita deve essere compresa tra 0 e 50
    
    C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */


const player = {
    cod: '',
    name: 'paolo',
    surname: 'andreotti',
    year: 39,
    media: '',
    percentage: '',
}

player.cod = generatePlayerCod(3);
player.media = randomInteger(0, 50);
player.percentage = randomInteger (0, 100);

for (key in player){
    console.log(key + ': ' + player[key]);
}

/**
 *  ******************************* FUNCTIONS *************************************
 */

/**
 * Function that returns a random numer between two values (both included).
 *
 * @param {*} minimumValue The minimum value of the random number to be generated
 * @param {*} maximumValue The maximum value of the random number to be generated
 * @returns The randon generated number.
 */
function randomInteger(minimumValue, maximumValue){
    if ( isNaN(parseInt(minimumValue)) || isNaN(parseInt(maximumValue)) ){
        console.error('randomInteger(min, max) needs two numbers as argument');
    }

    return ( Math.floor(Math.random() * ((maximumValue + 1) - minimumValue) + minimumValue));
}


function generatePlayerCod(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numbers       = '0123456789';
    let charactersLength = characters.length;
    let numbersLength = numbers.length;

    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    for ( let i = 0; i < length; i++ ) {
      result += numbers.charAt(Math.floor(Math.random() * numbersLength));
    }
    return result;
}