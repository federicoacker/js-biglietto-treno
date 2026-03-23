// DICHIARAZIONE E INIZIALIZZAZIONE VARIABILI COSTANTI //
const basePriceKm = 0.21; // Prezzo di base per km
const minorSale = 0.2; // Sconto moltiplicativo da applicare se sei un minorenne
const seniorSale = 0.4; // Sconto moltiplicativo da applicare se sei un senior
const minorAge = 18; // Soglia di età per essere considerato minorenne
const seniorAge = 65; // Soglia di età per essere considerato senior

// DICHIARAZIONE VARIABILI E PROMPT DI RICHIESTA ALL'UTENTE CON OPERATORE TERNARIO PER VALIDARE I DATI //
let isKilometersValid = false; // Flag usata in seguito per validazione dell'input
let isAgeValid = false; // Flag usata in seguito per validazione dell'input

const kilometers = Number(prompt("Quanti chilometri vuoi viaggiare?"));

//Operatore ternario, controlla se kilometers è NaN o kilometers è <= 0, in quel caso da errore, altrimenti setta isKilometersValid a true
(isNaN(kilometers) || kilometers <= 0) ? console.error("Il valore inserito per i chilometri non è valido")
: isKilometersValid = true;

const age = Number(prompt("Quanti anni hai"));

//Operatore ternario, controlla se age è NaN o age è <= 0, in quel caso da errore, altrimenti setta isAgeValid a true
(isNaN(age) || age <= 0) ? console.error("Il valore inserito per l'età non è valido")
: isAgeValid = true;

//Avendo usato delle flag booleane per controllare la validità dei dati inseriti, il controllo è più semplice da scrivere;
if(isAgeValid && isKilometersValid){
    finalPrice = basePriceKm * kilometers
    if (age < minorAge) {
        finalPrice -= finalPrice * minorSale;
    }
    else if (age >= seniorAge) {
        finalPrice -= finalPrice * seniorSale;
    }
    console.log(`Il prezzo del biglietto è di ${finalPrice.toFixed(2)} Euro`);
}
else {
    console.log("Esecuzione interrotta perché uno o più valori non erano validi");
}