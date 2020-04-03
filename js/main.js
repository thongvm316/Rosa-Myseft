let menuTogger = document.querySelector('.menu-toggle');
let body = document.querySelector('body');
console.log({menuTogger, body})

menuTogger.addEventListener('click', () => {
  body.classList.toggle('open')
})