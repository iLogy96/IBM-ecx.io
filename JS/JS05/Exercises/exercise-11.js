console.log('Exercise template 11');

// Write a function bmi that calculates body mass index (bmi = kg / m2).

function bmiCalculator (weight, height) {
	let bmi = weight/(Math.pow(height,2))
	if (bmi <= 18.5) {
		return 'Underweight'		
	}
	else if(bmi<=25.0){
		return 'Normal'
	}
	else if (bmi<=30.0){
		return 'Overweight'
	}
	else {
		return 'Obese'
	}
	
	// calculate bmi

	// if bmi <= 18.5 return "Underweight"

	// if bmi <= 25.0 return "Normal"

	//if bmi <= 30.0 return "Overweight"

	//if bmi > 30 return "Obese"
  
}

console.log(bmiCalculator(50, 1.7));
console.log(bmiCalculator(80, 1.8));
console.log(bmiCalculator(90, 1.8));
console.log(bmiCalculator(110, 1.6));