import Widget from "./Widget.js";


const form = document.querySelector('.form');
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

    const elements = form.elements;
    
    elements.forEach((el) => {
      console.dir(el);
    });
  
    console.log('submit');
  });
});