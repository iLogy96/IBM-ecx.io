let button = document.querySelector('.has-dropdown');
let dropdown = document.querySelector('.nav-menu');
let nav = document.querySelector('.nav')
function dropDown() {
    if (nav.classList.contains('nav')){
        nav.classList.remove('nav');
        button.classList.remove('has-dropdown')
        button.classList.toggle('js-transform')
    }
    else{
        nav.classList.add('nav');
        button.classList.add('has-dropdown')
        button.classList.toggle('js-transform')
    }
    dropdown.classList.toggle('dropdown');
    
}