// DICHIARAZIONE E INIZIALIZZAZIONE VARIABILI COSTANTI //
const basePriceKm = 0.21; // Prezzo di base per km
const minorSale = 0.2; // Sconto moltiplicativo da applicare se sei un minorenne
const seniorSale = 0.4; // Sconto moltiplicativo da applicare se sei un senior
const minorAge = 18; // Soglia di età per essere considerato minorenne
const seniorAge = 65; // Soglia di età per essere considerato senior
const prezzoTotaleHTML = document.querySelector('#prezzoTotale'); // selettore della sezione in cui fare il display del prezzo

// DICHIARAZIONE E INIZIALIZZAZIONE VARIABILI CHE USEREMO//
let finalPrice = 0; // Prezzo finale
let kilometers = 0; // Km inseriti dall'utente
let age = 0; // Età inserta dall'utente
let isKilometersValid = false // Flag usata in seguito per validazione dell'input
let isAgeValid = false // Flag usata in seguito per validazione dell'input

// FUNZIONE, VIENE CHIAMATA QUANDO PREMIAMO IL PULSANTE INVIA NELLA FORM // 
function calculatePrice() {
    // Seleziono tutti i field input nella mia form, questi vengono salvati in una nodelist,
    // so che indice 0 ho i chilometri e indice 1 ho l'età per come ho fatto la form
    const trainFormInputs = document.querySelectorAll('#formTreno input');
    // Associo alle mie variabili, kilometers e age, il value che recupero dalla form, inserito dall'utente (di default value 0)
    // che mi viene restituito come stringa
    kilometers = Number(trainFormInputs[0].value);
    age = Number(trainFormInputs[1].value);
    //Operatore ternario, controlla se kilometers è NaN o kilometers è <= 0, in quel caso da errore, altrimenti setta isKilometersValid a true
    isKilometersValid = !(isNaN(kilometers) || kilometers <= 0)
    //Operatore ternario, controlla se age è NaN o age è <= 0, in quel caso da errore, altrimenti setta isAgeValid a true
    isAgeValid = !(isNaN(age) || age <= 0);
    if(!isKilometersValid){
        alert("Il valore inserito per i chilometri non è valido");
    }
    if(!isAgeValid){
        alert("Il valore inserito per l'età non è valido");
    }

    if (isAgeValid && isKilometersValid) {
        //Calcolo del prezzo
        finalPrice = basePriceKm * kilometers
        if (age < minorAge) {
            finalPrice -= finalPrice * minorSale;
        }
        else if (age >= seniorAge) {
            finalPrice -= finalPrice * seniorSale;
        }
        prezzoTotaleHTML.innerHTML = `Prezzo Totale: ${finalPrice.toFixed(2)} \u20AC`;
    }
    else {
        prezzoTotaleHTML.innerHTML = `Prezzo Totale:`; // Reset della sezione del prezzo in caso di utilizzi sequenziali con errori
        alert("Esecuzione interrotta perché uno o più valori non erano validi");
    }
}


