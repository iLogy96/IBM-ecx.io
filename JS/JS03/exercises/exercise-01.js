// Write a JavaScript function to check whether a string is blank or not

function isBlank(blank){
    if (blank.length ===0){
        return "Blank";
    }else{
        return "Not blank";
    }
}
console.log(isBlank(''));
console.log(isBlank('abc'));
