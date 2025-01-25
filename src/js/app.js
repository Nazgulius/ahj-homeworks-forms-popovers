import Widget from "./Widget.js";




const button = document.querySelector('.btn1');
const popover = document.querySelector('.popover');

button.addEventListener('click', (e) => {
  e.preventDefault();
  popover.classList.toggle('_hidden');

  const {right, top, bottom, left } = button.getBoundingClientRect();
 
  popover.style.left = right - button.offsetWidth / 2 - popover.offsetWidth / 2 + 'px';
  popover.style.top = top - popover.offsetHeight - 5 + 'px';
});


// прошу прощения за излишний код. запутался в задании. Пробовал

// const form = document.querySelector('.form');
// const errors = {
//   login: {
//     valueMissing: "And here's some amazing content. It's very engaging. Right?",
//   },
//   email: {
//     valueMissing: 'Нам потребуется электронная почта...',
//     typeMismatch: 'А это вообще электронная почта?',
//   },
//   'credit-card': {
//     valueMissing: 'Представьте нам данные своей кредитной карты, это безопасно, честно',
//     patternMismatch: 'Не удалось снять деньги с вашей кредитной карты:(',
//   },
// }



// const widgetFactory = new Widget();
// const actualMessage = [];

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   actualMessage.forEach((id) => widgetFactory.removeWidget(id));

//   if (form.checkValidity()) {
//     console.log('valid');
//   } else {
//     console.log('invalid');    
//   }

//   const elements = Array.from(form.elements);

//   //elements.forEach(e => { console.log(e); });
  
//   [...elements].some((el) => {
//     return Object.keys(ValidityState.prototype).some((key) => {
//       if (!el.name) return true;
//       //if (key === 'valid') return;

//       //for (const key in el.validity) {
//         if (el.validity[key]){
//           console.dir(key);
//           console.dir(errors[el.name][key]);

//           actualMessage.push(widgetFactory.showWidget(errors[el.name][key], el));

//           return true;
//         }
//       //}

//     });
//   });


//   console.log('submit');
// });

// document.addEventListener('DOMContentLoaded', () => { 

// });