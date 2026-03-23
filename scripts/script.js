const basePriceKm = 0.21;
const minorSale = 0.2;
const seniorSale = 0.4;
const minorAge = 18;
const seniorAge = 65;
let finalPrice = 0;

let kilometers = 0;
let age = 0;
function buttonClick() {
    const trainFormInputs = document.querySelectorAll('#formTreno input');
    console.log(trainFormInputs);
    
    kilometers = trainFormInputs[0].value;
    age = trainFormInputs[1].value;
}

kilometers = parseFloat(kilometers);
age = parseInt(age);

finalPrice = basePriceKm * kilometers;

if(!(isNaN(age)) && age < minorAge){
    finalPrice -= finalPrice*minorSale;
} else if (!(isNaN(age)) && age >= seniorAge){
    finalPrice -= finalPrice*seniorSale;
}


