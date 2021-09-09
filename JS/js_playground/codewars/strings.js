//testing prime numbers
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

//jaden smith string converter

const capitalizeWord = (word) => {
  const firstLetter = word
    .trim()
    .split("")
    .slice(0, 1)
    .toString()
    .toUpperCase();
  const otherLetters = word.trim().split("").slice(1).join("").toString();
  const joinWord = firstLetter + otherLetters;
  return joinWord;
};

const toJadenCase = (str) => {
  words = str.trim().split(" ");
  let arrayOfWords = [];

  words.forEach((word) => {
    const upperCasedWord = capitalizeWord(word);
    arrayOfWords.push(upperCasedWord);
  });

  console.log(arrayOfWords.join(" "));
};

toJadenCase("How can mirrors be real if our eyes aren't real");

//function reverse word

const spinWords = (string) => {
  let arr = string.trim().split(" ");
  let reversedWords = [];
  arr.forEach((word) => {
    word.length > 5
      ? reversedWords.push(word.trim().split("").reverse().join(""))
      : reversedWords.push(word);
  });
  console.log(reversedWords.join(" "));
};

spinWords("Hey fellow warriors");
spinWords("This is a test");
spinWords("This is another test");

//get sum

