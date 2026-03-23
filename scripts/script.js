// DICHIARAZIONE E INIZIALIZZAZIONE VARIABILI COSTANTI //
const basePriceKm = 0.21; // Prezzo di base per km
const minorSale = 0.2; // Sconto moltiplicativo da applicare se sei un minorenne
const seniorSale = 0.4; // Sconto moltiplicativo da applicare se sei un senior
const minorAge = 18; // Soglia di età per essere considerato minorenne
const seniorAge = 65; // Soglia di età per essere considerato senior

// DICHIARAZIONE VARIABILI E PROMPT DI RICHIESTA ALL'UTENTE //

const kilometers = prompt ("Quanti chilometri vuoi viaggiare?");
kilometers = parseFloat(kilometers);

const age = prompt ("Quanti anni hai?");
age = parseInt(age);


