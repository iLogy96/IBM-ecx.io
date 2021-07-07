console.log('Exercise template 09');

// Write a function with do-while loop that will output all even numbers from 0 to defined number.

function evenNumbers (to) {
	let counter = 0;
	let num = '';   
	do{
		if (counter%2 ===0){
			num+= counter;
		}
		counter++;
	} while(counter <= to);
	return num.toString();
	// define variable for storing numbers as a string
	
		
	
	// do-while counter less or equals to "to" parameter

	// check if counter number is even
	// if counter is even add it to the string of numbers

	// increase counter by 1

	// return numbers string
}

console.log(evenNumbers(30));
// 024681012141618202224262830
console.log(evenNumbers(19));
// 024681012141618
console.log(evenNumbers(50));
// 02468101214161820222426283032343638404244464850