const BasePriceKm = 0.21;
const minorSale = 20;
const seniorSale = 40;

let kilometers = 0;
let age = 0;
function buttonClick() {
    const trainFormInputs = document.querySelectorAll('#formTreno input');
    console.log(trainFormInputs);
    
    kilometers = trainFormInputs[0].value;
    age = trainFormInputs[1].value;
    
    console.log(kilometers, age);
}

