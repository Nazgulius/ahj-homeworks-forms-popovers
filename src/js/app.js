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


  

const button = document.querySelector('.button');

const widgetFactory = new Widget();

const actualMessage = [];


form.addEventListener('submit', (e) => {
  e.preventDefault();

  actualMessage.forEach((id) => widgetFactory.removeWidget(id));

  if (form.checkValidity()) {
    console.log('valid');
  } else {
    console.log('invalid');    
  }

  const elements = Array.from(form.elements);
  
  [...elements].some((el) => {
    return Object.keys(ValidityState.prototype).some((key) => {
      if (!el.name) return;
      if (key === 'valid') return;

      //for (const key in el.validity) {
        if (el.validity[key]){
          console.dir(key);
          console.dir(errors[el.name][key]);

          actualMessage.push(widgetFactory.showWidget(errors[el.name][key], el));

          return true;
        }
      //}

    });
  });


  console.log('submit');
});

document.addEventListener('DOMContentLoaded', () => { 

});