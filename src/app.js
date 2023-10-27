"use strict";
// const weigth = document.getElementById('patientWeigth') 
// const patientSex = document.getElementById('patientSex')
// const ageCheckbox = document.getElementById('age')
// const button = document.getElementById('button')
// const drugConcentration = document.getElementById('drugConcentration')
// const drugName = document.getElementById('drugName')
// const msdForKilogram = document.getElementById('msdForKilogram')
// const cartrigeSize = document.getElementById('cartrigeSize')
// const results = document.getElementById('results')
// const femaleCheckbox = document.getElementById('female')
// const maximumSafeDosage = document.getElementById('maximumSafeDosage')
// attention.style.visibility = 'hidden'
// genderAttention.style.visibility = 'hidden'
// button.addEventListener('click', calculate)
// function calculate(){
//     let kg = weigth.value
//     let msdForKg = msdForKilogram.value
//     let drugConc = drugConcentration.value
//     let vialSize = cartrigeSize.value
//     let msd = ((kg * msdForKg) / (10 * drugConc )).toFixed(2)
//     let numberOfCartrige = (msd / vialSize).toFixed(2)
//     document.getElementById('results').innerText = `This patient can have a maximum of ${msd} ml or a total of ${numberOfCartrige} cartriges`
//     unfilledInformation()
//     ageAlert()
//     sexAlert()
// }
// function ageAlert(){
//     if(ageCheckbox.checked === false){
//         attention.style.visibility = 'visible'
//     }
// }
// function sexAlert(){
//     if(femaleCheckbox.checked){
//         genderAttention.style.visibility = 'visible'
//     }
// }
// function unfilledInformation(){
//     if(weigth.value == '' || msdForKilogram.value == '' || drugConcentration.value == '' || cartrigeSize.value == ''){
//         document.getElementById('results').innerText = 'Please fill all the information'
//     }
// }
//refactored code 
// Use descriptive variable names for better readability
const weightInput = document.getElementById('patientWeigth');
const drugConcentrationInput = document.getElementById('drugConcentration');
const msdForKilogramInput = document.getElementById('msdForKilogram');
const cartrigeSizeInput = document.getElementById('cartrigeSize');
const ageCheckbox = document.getElementById('age');
const button = document.getElementById('button');
const resultsOutput = document.getElementById('results');
const femaleCheckbox = document.getElementById('female');
const drugNameInput = document.getElementById('drugName');
const sexInput = document.getElementById('patientSex');
const maximumSafeDosage = document.getElementById('maximumSafeDosage');
// Use CSS classes for better styling control
const attentionElement = document.getElementById('attention');
const genderAttentionElement = document.getElementById('genderAttention');
const DECIMAL_PLACES = 2;
// Use event delegation for better performance
button.addEventListener('click', calculate);
function calculate() {
    const kg = parseFloat(weightInput.value);
    const msdForKg = parseFloat(msdForKilogramInput.value);
    const drugConc = parseFloat(drugConcentrationInput.value);
    const vialSize = parseFloat(cartrigeSizeInput.value);
    if (isNaN(kg) || isNaN(msdForKg) || isNaN(drugConc) || isNaN(vialSize)) {
        // Handle invalid input values gracefully
        resultsOutput.innerText = 'Please fill all the information with valid numbers.';
        return;
    }
    const msd = ((kg * msdForKg) / (10 * drugConc));
    const numberOfCartridges = (msd / vialSize);
    resultsOutput.innerText = `This patient can have a maximum of ${msd} ml or a total of ${numberOfCartridges} cartridges.`;
    // Move the alerts to their respective functions
    ageAlert();
    sexAlert();
}
function ageAlert() {
    if (!ageCheckbox.checked) {
        attentionElement.style.visibility = 'visible';
    }
    else {
        attentionElement.style.visibility = 'hidden';
    }
}
function sexAlert() {
    if (femaleCheckbox.checked) {
        genderAttentionElement.style.visibility = 'visible';
    }
    else {
        genderAttentionElement.style.visibility = 'hidden';
    }
}
// Clear results when any input field changes
const inputFields = [weightInput, msdForKilogramInput, drugConcentrationInput, cartrigeSizeInput];
inputFields.forEach((input) => {
    input.addEventListener('input', clearResults);
});
function clearResults() {
    resultsOutput.innerText = '';
}
