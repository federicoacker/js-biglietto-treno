// DICHIARAZIONE E INIZIALIZZAZIONE VARIABILI COSTANTI //
const basePriceKm = 0.21; // Prezzo di base per km
const minorSale = 0.2; // Sconto moltiplicativo da applicare se sei un minorenne
const seniorSale = 0.4; // Sconto moltiplicativo da applicare se sei un senior
const minorAge = 18; // Soglia di età per essere considerato minorenne
const seniorAge = 65; // Soglia di età per essere considerato senior

// DICHIARAZIONE VARIABILI E PROMPT DI RICHIESTA ALL'UTENTE //

let kilometers = prompt("Quanti chilometri vuoi viaggiare?");
kilometers = parseFloat(kilometers);
let age = prompt("Quanti anni hai?");
age = parseInt(age);

// Prima condizione, controlliamo se i chilometri inseriti o l'età inserita sono NaN o se uno dei due è <= 0 
if((isNaN(kilometers) || isNaN(age)) || (kilometers <= 0) || (age <= 0)){
    console.log("I Chilometri o l'età che hai inserito non sono validi");
}
// Altrimenti, proseguiamo controllando se l'età inserita ci da diritto ad uno sconto e calcoliamo il valore del prezzo finale, 
// infine lo mostriamo in console
else {
    finalPrice = basePriceKm * kilometers
    if(age < minorAge){
        finalPrice -= finalPrice * minorSale;
    }
    else if (age >= seniorAge){
        finalPrice -= finalPrice * seniorSale;
    }
    console.log(`${finalPrice.toFixed(2)}`);
}