const grammer = (word) => {
    return word.charAt(0) === word.charAt(0).toUpperCase()
    && word.charAt(word.length - 1) === "."
}
console.log(grammer("Bok ja sam Ivan."));