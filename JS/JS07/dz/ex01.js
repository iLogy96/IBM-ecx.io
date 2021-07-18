let arraySort =[
 { name: 'Zagreb', postalCode: 10000, type: 1 },
 { name: 'Varazdin', postalCode: 42000, type: 2 },
 { name: 'Split', postalCode: 21000, type: 2 },
 { name: 'Rijeka', postalCode: 51000, type: 3 },
 { name: 'Osijek', postalCode: 31000 },
 { name: 'Zadar', postalCode: 23000 }
];
const sortByName = (a, b) => {
	if (a.type < b.type) { return -1; }
	if (a.type > b.type) { return 1; }
	return 0;
}
// const sortByName2 = (a,b) => a.type.localeCompare(b.type);
console.log(arraySort.sort(sortByName));
