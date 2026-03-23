// DICHIARAZIONE E INIZIALIZZAZIONE VARIABILI COSTANTI //
const basePriceKm = 0.21; // Prezzo di base per km
const minorSale = 0.2; // Sconto moltiplicativo da applicare se sei un minorenne
const seniorSale = 0.4; // Sconto moltiplicativo da applicare se sei un senior
const minorAge = 18; // Soglia di età per essere considerato minorenne
const seniorAge = 65; // Soglia di età per essere considerato senior

// DICHIARAZIONE E INIZIALIZZAZIONE VARIABILI CHE USEREMO//
let finalPrice = 0; // Prezzo finale
let kilometers = 0; // Km inseriti dall'utente
let age = 0; // Età inserta dall'utente

// FUNZIONE, VIENE CHIAMATA QUANDO PREMIAMO IL PULSANTE INVIA NELLA FORM // 
function buttonClick() {
    // Seleziono tutti i field input nella mia form, questi vengono salvati in una nodelist,
    // so che indice 0 ho i chilometri e indice 1 ho l'età per come ho fatto la form
    const trainFormInputs = document.querySelectorAll('#formTreno input');
    // Associo alle mie variabili, kilometers e age, il value che recupero dalla form, inserito dall'utente (di default value 0)
    // che mi viene restituito come stringa
    kilometers = trainFormInputs[0].value;
    age = trainFormInputs[1].value;

    // Faccio il parse di kilometers in float e age in int per averli del tipo giusto 
    // (voglio che i chilometri possano essere inseriti come numero con virgola e non vengano troncati quando c'è il parse da string)
    kilometers = parseFloat(kilometers);
    age = parseInt(age, 10);

    // Faccio un primo calcolo del finalPrice
    finalPrice = basePriceKm * kilometers;

    // Controllo se age o kilometers sia NaN, in quel caso, l'utente ha inserito male uno dei due campi e glielo comunico
    if (isNaN(age) || isNaN(kilometers)) {
        alert("Hai inserito valori non validi in uno dei due campi");
    }
    // Controllo che (ammesso sempre che age e kilometers non siano "not a number") essi non siano uguali a 0, in quel caso 
    // l'utente ha dimenticato di inserire un campo e sono stati usati valori di default, quindi glielo comunico
    else if (!(isNaN(age) || isNaN(kilometers)) && (age === 0 || kilometers === 0)) {
        alert("Uno dei due campi non è stato modificato");
    }
    // Arrivato qui, sono sicuro che i valori inseriti siano effettivamente diversi da 0 e che non siano "not a number" 
    // quindi inizio il condizionale per controllare se l'utente ha diritto ad uno sconto
    else {
        //Controllo che l'utente non sia stronzo e non abbia messo valori negativi o infiniti
        if (age < 0 || kilometers < 0 || !isFinite(age)) {
            alert("Smetti di mettere valori senza senso nei campi");
        }
        else {
            // Controllo se l'utente è minorenne, se si, gli applico lo sconto per minorenni
            if (age < minorAge) {
                finalPrice -= finalPrice * minorSale;
            }
            // Controllo se l'utente è senior, se si, gli applico lo sconto per senior (esclusivo rispetto al controllo per minorenni, avviene o l'uno o l'altro) 
            else if (age >= seniorAge) {
                finalPrice -= finalPrice * seniorSale;
            }
            // In ogni caso, adesso so quanto è il valore del prezzo finale, seleziono la mia sezione sotto la form 
            // in cui comunico il prezzo e gli cambio l'innerHTML in modo che mostri il prezzo calcolato
            const prezzoTotaleHTML = document.querySelector('#prezzoTotale');
            prezzoTotaleHTML.innerHTML = `Prezzo Totale: ${finalPrice.toFixed(2)} \u20AC`;
        }
    }
}


