import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputEmailRef = document.querySelector('.feedback-form input');
const inputMessageRef = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
let receivedData;

restoreInputsData();

formRef.addEventListener('input', throttle(saveInputsData, 500));
formRef.addEventListener('submit', onFormSubmit);

function saveInputsData(event) {

  formData.email = inputEmailRef.value;
  formData.message = inputMessageRef.value;
  //formData[event.target.name] = event.target.value;
  receivedData = formData;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function restoreInputsData() {
  const restoredFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (restoredFormData) {
    inputEmailRef.value = restoredFormData.email;
    inputMessageRef.value = restoredFormData.message;

  }
  receivedData = restoredFormData;
 
  
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(receivedData);

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}



