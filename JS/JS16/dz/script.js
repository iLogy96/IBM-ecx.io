const form = document.querySelector('#password-checker-form');
const ul = document.querySelector('.password-criteria').children;
let password = 0;
let NUMBERS_OF_RULES_ENFORCED = 0;
let SUM_OF_POINTS = 0;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    isLongerThan8Characters();
    containsLowercaseLetter();
    containsUppercaseLetter();
    containsADigit();
    containsASymbol();
    containsFiveUniqueCharacters();
    checkPassword();
});
function isLongerThan8Characters() {
    password = form.elements['password'].value;
    if (password.length > 8) {
        SUM_OF_POINTS = SUM_OF_POINTS + 10;
        NUMBERS_OF_RULES_ENFORCED = NUMBERS_OF_RULES_ENFORCED + 1;
        ul[0].style.color = 'green';
    } else {
        ul[0].style.color = 'red';
    }
}
function containsLowercaseLetter() {
    let regex = /[a-z]/g;
    if (password.match(regex)) {
        SUM_OF_POINTS = SUM_OF_POINTS + 5;
        NUMBERS_OF_RULES_ENFORCED = NUMBERS_OF_RULES_ENFORCED + 1;
        ul[1].style.color = 'green';
    } else {
        ul[1].style.color = 'red';
    }
}
function containsUppercaseLetter() {
    let regex = /[A-Z]/g;
    if (password.match(regex)) {
        SUM_OF_POINTS = SUM_OF_POINTS + 5;
        NUMBERS_OF_RULES_ENFORCED = NUMBERS_OF_RULES_ENFORCED + 1;
        ul[2].style.color = 'green';
    } else {
        ul[2].style.color = 'red';
    }
}
function containsADigit() {
    let regex = /[0-9]/g;
    if (password.match(regex)) {
        SUM_OF_POINTS = SUM_OF_POINTS + 5;
        NUMBERS_OF_RULES_ENFORCED = NUMBERS_OF_RULES_ENFORCED + 1;
        ul[3].style.color = 'green';
    } else {
        ul[3].style.color = 'red';
    }
}
function containsASymbol() {
    let regex = /[^\w]/g;
    if (password.match(regex)) {
        SUM_OF_POINTS = SUM_OF_POINTS + 10;
        NUMBERS_OF_RULES_ENFORCED = NUMBERS_OF_RULES_ENFORCED + 1;
        ul[4].style.color = 'green';
    } else {
        ul[4].style.color = 'red';
    }
}
function containsFiveUniqueCharacters() {
    let regex = /[#?!@$%^&*-].{4,}$/g;
    if (password.match(regex)) {
        SUM_OF_POINTS = SUM_OF_POINTS + 5;
        NUMBERS_OF_RULES_ENFORCED = NUMBERS_OF_RULES_ENFORCED + 1;
        ul[5].style.color = 'green';
    } else {
        ul[5].style.color = 'red';
    }
}
function checkPassword() {
    let sumOfPasswordPoints = SUM_OF_POINTS + NUMBERS_OF_RULES_ENFORCED * 10;
    let passwordStrengthBar = document.querySelector('.password-strength-bar');
    passwordStrengthBar.style.width = `${sumOfPasswordPoints}%`
    console.log(sumOfPasswordPoints)
    if (sumOfPasswordPoints <= 50) {
        passwordStrengthBar.style.backgroundColor = 'red';
    } else if (passwordStrengthBar > 50 || passwordStrengthBar <= 75) {
        passwordStrengthBar.style.backgroundColor = 'orange';
    } else if (passwordStrengthBar > 75 || passwordStrengthBar < 100) {
        passwordStrengthBar.style.backgroundColor = 'yellow';
    } else if (passwordStrengthBar === 100) {
        passwordStrengthBar.style.backgroundColor = 'green';
    }
}