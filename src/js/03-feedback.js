import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = "feedback-form-state";
let formData = {};
populateTextarea();

form.addEventListener('input', throttle(onTextareaInput, 500));
form.addEventListener('submit', onFormSubmit);


function onTextareaInput(e) {
    formData.email = email.value;
    formData.message = textarea.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function populateTextarea() {
    if (localStorage.getItem(STORAGE_KEY)) {
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
        for (let key in data) {
            form[key].value = data[key]};

    };
};


function onFormSubmit(e) {
    e.preventDefault();
    console.log(localStorage.getItem(STORAGE_KEY))
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
};
