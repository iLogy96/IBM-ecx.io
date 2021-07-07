function whatCentury(year){
    return Math.floor((year-1)/100)+1;
}
console.log(whatCentury(1705));
console.log(whatCentury(1900));
console.log(whatCentury(1601));
console.log(whatCentury(2000));