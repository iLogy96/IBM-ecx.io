//funkcija koja daje mjesece u godini ovisno koji broj uneseš
let getMonthOfTheYear = month => {
    if (month>=1 && month<=12){
        switch (month){
            case 1:
            return 'January';
            case 2:
            return 'February';
            case 3:
            return 'March';
            case 4:
            return 'April';
            case 5:
            return 'May';
            case 6:
            return 'June';
            case 7:
            return 'July';
            case 8:
            return 'August';
            case 9:
            return 'September';
            case 10:
            return 'October';
            case 11:
            return 'November';
            case 12:
            return 'December';
        }
    }
}
console.log(getMonthOfTheYear(1));
console.log(getMonthOfTheYear(4));
console.log(getMonthOfTheYear(8));