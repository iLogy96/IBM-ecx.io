console.log('Exercise template 17');

// Write function removeExclamationMarks which removes all exclamation marks from a given string.


function removeExclamationMarks(text){
    return text.replaceAll('!','');
}

console.log(removeExclamationMarks('TextWith!Which!should!beremoved!'));
console.log(removeExclamationMarks('!!!dont yell at me!!!'));
console.log(removeExclamationMarks('one more example'));