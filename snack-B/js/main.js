/**
 *
 *
    Crea un array composto da 12 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

    Infine stampa separatamente i 3 array.

 *
 */

const cars = [
    {
        marca: 'fiat',
        modello: '500x',
        alimentazione: 'benzina'
    },
    {
        marca: 'peugeot',
        modello: '106',
        alimentazione: 'diesel'
    },
    {
        marca: 'nissan',
        modello: 'quasquai',
        alimentazione: 'diesel'
    },
    {
        marca: 'volkswagen',
        modello: 'Golf 7 TGI',
        alimentazione: 'metano'
    },
    {
        marca: 'volkswagen',
        modello: 'Polo 5',
        alimentazione: 'benzina'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'diesel'
    },
    {
        marca: 'fiat',
        modello: '500',
        alimentazione: 'elettrica'
    },
    {
        marca: 'tesla',
        modello: 'Model 3',
        alimentazione: 'elettrica'
    },
    {
        marca: 'renault',
        modello: 'clio',
        alimentazione: 'gpl'
    },
    {
        marca: 'Alfa romeo',
        modello: 'Giulia quadrifoglio',
        alimentazione: 'benzina'
    },
    {
        marca: 'Lancia',
        modello: 'Ypsilon Elefantino',
        alimentazione: 'gpl'
    },
    {
        marca: 'Opel',
        modello: 'Zafira 2',
        alimentazione: 'diesel'
    }
];

console.table(cars);

const gasolineCars = cars.filter((element) => {
    if(element.alimentazione == 'benzina'){
        return true;
    } 
});

console.table(gasolineCars);

const dieselCars = cars.filter((element) => {
    if(element.alimentazione == 'diesel'){
        return true;
    } 
});

console.table(dieselCars);

const otherCars = cars.filter((element) => {
    if(element.alimentazione != 'benzina' && element.alimentazione != 'diesel'){
        return true;
    } 
});

console.table(otherCars);