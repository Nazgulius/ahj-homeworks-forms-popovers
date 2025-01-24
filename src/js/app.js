import Widget from "./Widget.js";


const form = document.querySelector('.form');
const errors = {
  login: {
    valueMissing: 'Представьтесь, пожалуйста!',
  },
  email: {
    valueMissing: 'Нам потребуется электронная почта...',
    typeMismatch: 'А это вообще электронная почта?',
  },
  'credit-card': {
    valueMissing: 'Представьте нам данные своей кредитной карты, это безопасно, честно',
    patternMismatch: 'Не удалось снять деньги с вашей кредитной карты:(',
  },
}

document.addEventListener('DOMContentLoaded', () => { 
  

  const button = document.querySelector('.button');
  
  

  // button.addEventListener('click', () => {
  //   console.log('click 2');
  // });

  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    if (form.checkValidity()) {
      console.log('valid');
    } else {
      console.log('invalid');    
    }

    const elements = Array.from(form.elements);
    elements.forEach((el) => {
      if (!el.name) return;
      for (const key in el.validity) {
        if (el.validity[key]){
          console.dir(el);
          console.dir(errors[el.name][key]);
        }
      }
     
    });
  
    console.log('submit');
  });
});