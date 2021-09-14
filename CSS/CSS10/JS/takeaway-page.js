const takeawayButtonBlue = document.querySelector(".takeaway__button--blue");
const changeLink = document.querySelector(".js--one__link");
const buttonGray = document.querySelector(".form__button");

const saveDeliveryInfo = () => {
  const hiddenSection = document.querySelector(".takeaway__section");
  const newSection = document.querySelector(".section__show");
  const numberOneNewStyle = document.querySelector(".--one");
  const numberTwoNewStyle = document.querySelector(".--two");
  hiddenSection.classList.toggle("is--hidden");
  newSection.classList.toggle("js--one");
  numberOneNewStyle.classList.toggle("--one-closed");
  numberTwoNewStyle.classList.toggle("--two-open");
  titleTwo.classList.toggle("takeaway__title__bold");
  form.classList.toggle("is--hidden");
//   takeawayAcceptedForm.classList.toggle("takeaway__js--hidden")

};

const saveDetailsInfo = () => {

}


takeawayButtonBlue.addEventListener("click", saveDeliveryInfo);
changeLink.addEventListener("click", saveDeliveryInfo);
// buttonGray.addEventListener("click", saveDeliveryInfo);
