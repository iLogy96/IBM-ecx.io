console.log('Exercise template 10');

// Write a function that will add space after each vowel.

function vowels (text) {
	let finalTxt = '';
	for (let i=0;i<text.length;i++){
		finalTxt+=text.charAt(i);
		if (text.charAt(i) ==='a' && text.charAt(i) ==='e' && text.charAt(i) ==='i' && text.charAt(i) ==='o' && text.charAt(i) ==='u'){
			finalTxt+=text[i]+' '
		}
		return finalTxt
	}
	// define variable for storing final text

	// use for loop from 0 until text length

	// add first char of the text to the defined var for final text

	// if char is vowel add space to the defined var for final text

	// return new text

	//riješiti sa arrayom kasnije!
}

console.log(vowels('bootcamp'));
console.log(vowels('frontend'));