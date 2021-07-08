//splita riječ i onda stavlja u array
let arrayOfWords = [];
let stringToArray = (str) => {
    for (let i = 0;i<str.length;i++){
        arrayOfWords=str.trim().split(' ')
    }
    return arrayOfWords
}
console.log(stringToArray('Ispisujem random rijeci'))
// let extractChar = (str,num) => {
//     let slova = '';
//     for (let i = 0;i<str.length;i++){
//         if (i === num){
//             break
//         }
//         slova+= str[i];
//     }return slova
// }
// console.log(extractChar('Robin Singh',4))
//slicea na zadani broj i to sprema u prazan string prije ispisa
let extractChar = (str,num) => {
    let strSave = '';
    return strSave+=str.slice(0,num);
}
console.log(extractChar('Robin Singh',4))
//converta string u abbreviation
let nameToAbbr = (str) => {
    let abbr = str.trim().split(" ")
    if (abbr.length>1){
        return abbr[0] + " " + abbr[1].charAt(0)+".";
    }
}    
console.log(nameToAbbr('Robin Singh'))
//protection for email
let protectEmail = (str) => {
    let protec = str.trim().split('@')
    console.log(protec)
    let part1 = protec[0];
    let part2 = protec[1];
    avg = part1.length/2;
    part1 = part1.substring(0,(part1.length-avg))
    return part1 + "...@" + part2
}
console.log(protectEmail('robin_singh@example.com'))
//



