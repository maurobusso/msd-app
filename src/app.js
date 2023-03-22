const weigth = document.getElementById('patientWeigth')
const patientSex = document.getElementById('patientSex')
const ageCheckbox = document.getElementById('age')
const button = document.getElementById('button')
const drugConcentration = document.getElementById('drugConcentration')
const drugName = document.getElementById('drugName')
const msdForKilogram = document.getElementById('msdForKilogram')
const cartrigeSize = document.getElementById('cartrigeSize')
const results = document.getElementById('results')
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

    unfilledInformation()

    ageAlert()
    sexAlert()
}

function ageAlert(){
    if(ageCheckbox.checked === false){
        attention.style.visibility = 'visible'
    }
}

function sexAlert(){
    if(femaleCheckbox.checked){
        genderAttention.style.visibility = 'visible'
    }
}

function unfilledInformation(){
    if(weigth.value == '' || msdForKilogram.value == '' || drugConcentration.value == '' || cartrigeSize.value == ''){
        document.getElementById('results').innerText = 'Please fill all the information'
    }
}
