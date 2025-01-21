import Widget from "./Widget.js";

document.addEventListener('DOMContentLoaded', () => { 

  const button = document.querySelector('.button');
  const form = document.querySelector('.form');
  

  button.addEventListener('click', () => {
    
    
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('submit');
  });
});