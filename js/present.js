const openBtn = document.getElementById('btn-present-open');
const popup = document.querySelector('#present-popup');
const closeBtn = document.querySelector('#present-popup__close');
const nameField = document.querySelector('#present-popup input[name="name"]').parentNode;
const emailField = document.querySelector('#present-popup input[name="email"]').parentNode;
const form = document.getElementById('present-form');

function popupToggle()  {
    console.log(popup.classList);
    popup.classList.toggle('hidden');
}

const ERROR_CLASS_NAME = 'st-input1_error';
const FOCUSED_CLASS_NAME = 'st-input1_focused';

function initializeField(field)  {
    const input = field.getElementsByTagName('input')[0];
    const fieldError = field.querySelector('.st-input1__error-msg')

    input.value = '';
    field.classList.remove(ERROR_CLASS_NAME);
    field.classList.remove(FOCUSED_CLASS_NAME);
    fieldError.innerText = '';

    input.onfocus = function()  {
        fieldError.classList.add(FOCUSED_CLASS_NAME);
    }

    input.onblur = () =>  {
        if(!input.value)    {
            field.classList.remove(FOCUSED_CLASS_NAME);
        }
    }

    return  {
        getValue()  {
            return input.value;
        }
    }
}
console.log(1,2,3);
const nameFieldUtils = initializeField(nameField);
const emailFieldUtils = initializeField(emailField);
console.log(openBtn)
openBtn.onclick = popupToggle;
closeBtn.onclick = popupToggle;

function handleSubmit(event) {
    event.preventDefault();

    const data = {
        name: nameFieldUtils.getValue(),
        email: emailFieldUtils.getValue(),
    };

    const url = new Url ('http://inno-ijl.ru/multistub/stc-21-03/feedback');
    url.search = new URLSearchParams().toString();

    fetch(url.toString());

}

form.addEventListener('submit', handleSubmit)