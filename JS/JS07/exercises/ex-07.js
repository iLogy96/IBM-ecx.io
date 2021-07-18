console.log('Exercise template 07');

// Show all images from the list on the page. Add button which on click hides random image (use visibility property).

let arrayForEach = [
	{ src: 'http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg', alt: 'image' },
	{ src: 'http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg', alt: 'image2' },
	{ src: 'http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg', alt: 'image3' }
];


const div = document.querySelector('.js-image-list');
let rend = "";
arrayForEach.forEach(image => {
	rend+=`<img src="${image.src}" alt="${image.alt}">`
});
// arrayForEach.forEach(image => {
// 	rend+=`<img src="${image.src}" alt="${image.alt}">`
// });
div.innerHTML=rend;

// arrayForEach.forEach((elem) => {
// 	let img = document.createElement('img');
// 	img.src = elem.src;
// 	img.alt = elem.alt;
// 	div.appendChild(img);
// })