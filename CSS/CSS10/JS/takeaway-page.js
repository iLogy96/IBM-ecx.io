const takeawayButtonBlue = document.querySelector('.takeaway__button--blue');
const changeLink = document.querySelector('.js--one__link')


const saveDeliveryInfo = () => {
    const hiddenSection = document.querySelector('.takeaway__section');
    const newSection = document.querySelector('.section__show');
    const numberOneNewStyle = document.querySelector('.--one');
    const numberTwoNewStyle = document.querySelector('.--two')
    const titleTwo = document.querySelector('.takeaway__section__title--alternative')
    const form = document.querySelector('.form')
    hiddenSection.classList.toggle('takeaway__js--hidden');
    newSection.classList.toggle('js--one');
    numberOneNewStyle.classList.toggle('--one-closed')
    numberTwoNewStyle.classList.toggle('--two-open')
    titleTwo.classList.toggle('takeaway__title__bold')
    form.classList.toggle('takeaway__js--hidden')
}



takeawayButtonBlue.addEventListener("click", saveDeliveryInfo);
changeLink.addEventListener("click", saveDeliveryInfo);