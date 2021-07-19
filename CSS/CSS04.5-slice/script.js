let buttonAccept = document.querySelector('.accept')
let buttonDecline = document.querySelector('.decline')
let cookies = document.querySelector('.cookie-bar')
buttonAccept.addEventListener('click',remove);
buttonDecline.addEventListener('click',remove);
function remove() {
    cookies.innerHTML='';
}