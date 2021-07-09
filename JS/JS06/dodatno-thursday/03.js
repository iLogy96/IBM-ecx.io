//dodavanje love po danima u tjednu
let timePeriod = Number(prompt('enter how long you will be saving in weeks: '));
let amount = Number(prompt('enter the amount of money in kn: '));
let frequencyInDays = Number(prompt('enter how frequently you will add money: '));
let savingCalculator = () =>{
    
    let sum = amount * frequency(frequencyInDays);
    alert(sum);
}
function frequency(day){
    switch (day) {
        case 1: 
            return timePeriod*1;
        case 2:
            return timePeriod*2;
        case 3:
            return timePeriod*3;
        case 4:
            return timePeriod*4;
        case 5:
            return timePeriod*5;
        case 6:
            return timePeriod*6;
        case 7:
            return timePeriod*7;
    }
}
savingCalculator();