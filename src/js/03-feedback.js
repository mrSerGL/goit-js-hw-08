import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputEmailRef = document.querySelector('.feedback-form input');
const inputMessageRef = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';

restoreInputsData();

formRef.addEventListener('input', throttle(saveInputsData, 1000));
formRef.addEventListener('submit', onFormSubmit);

function saveInputsData(event) {
  const formData = {};

  formData.email = inputEmailRef.value;
  formData.message = inputMessageRef.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function restoreInputsData() {
  const restoredFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (restoredFormData) {
    inputEmailRef.value = restoredFormData.email;
    inputMessageRef.value = restoredFormData.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
