console.log('Exercise template 04');

function divideText (text, divider) {
	let newText = '';
	// dok je i++ to je inače i = i + 1, odnosno i += 1
	for (let i = 0;i<text.length;i+=2){
			newText+=text.slice(i,i+2) + divider;
		// text.slice(početak, kraj), dakle od i do ....probaj sam
		// i spremi u newText
		//i dodaš još divider onda
	}

	// write a for loop that will iterate over text and add dividers after every two letters


	return newText;
}

console.log(divideText('Otorinolaringologija', '_'));
// Result: Ot_or_in_ol_ar_in_go_lo_gi_ja_