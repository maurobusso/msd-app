const weigth = document.getElementById('patientWeigth')
const patientSex = document.getElementById('patientSex')
const ageCheckbox = document.getElementById('age')
const button = document.getElementById('button')
const drugConcentration = document.getElementById('drugConcentration')
const drugName = document.getElementById('drugName')
const msdForKilogram = document.getElementById('msdForKilogram')
const cartrigeSize = document.getElementById('cartrigeSize')
const results = document.getElementById('results')
// const attention = document.getElementById('attention')
const femaleCheckbox = document.getElementById('female')
const maximumSafeDosage = document.getElementById('maximumSafeDosage')

attention.style.visibility = 'hidden'
genderAttention.style.visibility = 'hidden'

button.addEventListener('click', calculate)

function calculate(){
    let kg = weigth.value
    let msdForKg = msdForKilogram.value
    let drugConc = drugConcentration.value
    let vialSize = cartrigeSize.value

    let msd = ((kg * msdForKg) / (10 * drugConc )).toFixed(2)
    let numberOfCartrige = (msd / vialSize).toFixed(2)

    document.getElementById('results').innerText = `This patient can have a maximum of ${msd} ml or a total of ${numberOfCartrige} cartriges`

    ageAlert()
    sexAlert()
}

function ageAlert(){
    if(ageCheckbox.checked === false){
        attention.style.visibility = 'visible'
    }
}

function sexAlert(){
    if(femaleCheckbox.checked === true){
        genderAttention.style.visibility = 'visible'
    }
}
