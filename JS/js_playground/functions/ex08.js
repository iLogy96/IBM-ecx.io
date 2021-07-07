//kalkulator funkcija
let calculator = (a,b,operator) =>{
    if (operator === '+'){
        return a+b;
    }
    else if (operator === '-'){
        return a-b;
    }
    else if (operator === '*'){
        return a*b;
    }
    else if (operator === '/'){
        return a/b;
    }
}
console.log(calculator(3, 4, '+'));
console.log(calculator(5, 6, '-'));
console.log(calculator(1, 5, '*'));
console.log(calculator(9, 3, '/'));