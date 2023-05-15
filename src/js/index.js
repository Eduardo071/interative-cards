let confirmationScreen = document.querySelector('#changeScreen')
let buttonSubmit = document.querySelector('#submit-input')

let inputsForm =
    [
        document.querySelector('#name-input'),
        document.querySelector('#number-input'),
        document.querySelector('#mounth-input'),
        document.querySelector('#year-input'),
        document.querySelector('#cvv-input')
    ]

let camposInvalidos = [
    document.querySelector('#campoInvalido'),
    document.querySelector('#campoInvalido2'),
    document.querySelector('#campoInvalido3'),
    document.querySelector('#campoInvalido4')

]

let cardName = document.getElementById('card-name')
let cardNumber = document.getElementById('card-number')
let cardDate = document.getElementById('card-date')
let cardCvv = document.getElementById('cvv-number')

console.log(camposInvalidos[0].classList)

buttonSubmit.addEventListener('click', () => {


    if (inputsForm[0].value !== '' &&
        inputsForm[1].value !== '' &&
        inputsForm[2].value !== '' &&
        inputsForm[3].value !== '' &&
        inputsForm[4].value !== '')    
    {
        cardName.innerText = `${inputsForm[0].value}`
        cardNumber.innerText = `${inputsForm[1].value.match(/.{1,4}/g).join(' ')}`
        cardDate.innerText = `${inputsForm[2].value}/${inputsForm[3].value}`
        cardCvv.innerText = `${inputsForm[4].value}`


        confirmationScreen.classList.add('screen-confirm')
        confirmationScreen.innerHTML = `<img class="complete-image" src="src/images/icon-complete.svg" alt="icon complete">
                                        <h1 class="title-confirmation">Muito Obrigado!</h1>
                                        <h3 class="description-confirmation">Nós adicionamos os detalhes no seu cartão</h3>`


    } else if(inputsForm[0].value === '') {
        camposInvalidos[0].classList.remove('hide')
    } else if(inputsForm[1].value === '') {
        camposInvalidos[1].classList.remove('hide')
    } else if(
        (inputsForm[2].value === '' || inputsForm[3].value === '') || 
        (inputsForm[2].value === '' && inputsForm[3].value === '')) {
        camposInvalidos[2].classList.remove('hide')
    } else if(inputsForm[4].value === '') {
        camposInvalidos[3].classList.remove('hide')
    }

    if(inputsForm[0].value !== '') {
        camposInvalidos[0].classList.add('hide')
    } else if(inputsForm[1].value !== '') {
        camposInvalidos[1].classList.add('hide')
    } else if(inputsForm[2].value !== '') {
        camposInvalidos[2].classList.add('hide')
    } else if(inputsForm[4].value !== '') {
        camposInvalidos[3].classList.add('hide')
    }


})



       