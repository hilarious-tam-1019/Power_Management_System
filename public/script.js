const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body')
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger')
    if(header.classList.contains('open')) { //Close Hamburger menu    
        body.classList.remove('noscroll')
        header.classList.remove('open')
       fadeElems.forEach(element => {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
       })
       
    }
    else {
        body.classList.add('noscroll')
        header.classList.add('open') //Open Hamburger menu
        fadeElems.forEach(element => {
            element.classList.remove('fade-out') 
            element.classList.add('fade-in')
        });
    }
    
})