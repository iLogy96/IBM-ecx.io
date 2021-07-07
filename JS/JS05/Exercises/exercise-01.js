console.log('Exercise template 01');

function getDayOfTheWeek (day) {
	if (day1>=1 && day7<=7) {
		switch (day) {
			case 1:
				return 'Monday';
			case 2:
				return 'Tuesday';
			case 3:
				return 'Wednesday';
			case 4:
				return 'Thursday';
			case 5:
				return 'Friday';
			case 6:
				return 'Saturday';
			case 7:
				return 'Sunday';
			// write other cases
		}
	}

	return 'Wrong day';
}

console.log(getDayOfTheWeek(2));
console.log(getDayOfTheWeek(9));