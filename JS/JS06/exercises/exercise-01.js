const startingNumber = Number(prompt('Enter the starting number: '));
const endingNumber = Number(prompt('Enter the ending number: '));
// create now another const for the ending number

let print = ''
let print2= ''
let print3= ''
for (let i = startingNumber;i<=endingNumber;i++){
    print+=i + ' '
}
// create now a for loop where the starting index value will be the startingNumber and the maximum index value will be the ending number.
alert(print);
//printaj sve brojeve djeljive s 3
for (let i = startingNumber;i<=endingNumber;i++){
    if (i % 3 ===0){
        print2+=i+' '
    }
}
alert(print2);
//dodaj , nakon svakog broja i . nakon zadnjeg
for (let i = startingNumber;i<=endingNumber;i++){
    if (i === endingNumber){
        print3+=i+'.'
    }
    else{
        print3+=i+','
    }
}
alert(print3)