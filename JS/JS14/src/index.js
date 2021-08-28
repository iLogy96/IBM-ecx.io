document.addEventListener("DOMContentLoaded", function () {
	init();
});

const init = () => {
	fetchUsers()
	console.log('Hello');
}

async function fetchUsers(){
	await fetch ('https://jsonplaceholder.typicode.com/users')
	.then(res => res.json())
	.then(data => {
		renderAdmin(data)
		// renderUser(data)
	})
	.catch(err => console.log(err))
}

function renderAdmin(users) {
	const tableContainer = document.querySelector(".table tbody");
	if(tableContainer){
		const source = document.querySelector("#usersTemplate").innerHTML;
		const template = Handlebars.compile(source);
		const output = template({ data: users });
		tableContainer.innerHTML = output;  
	}
	const cardContainer = document.querySelector(".container");
	if (cardContainer){
		const source = document.querySelector("#cardTemplate").innerHTML;
		const template = Handlebars.compile(source);
		const output = template({ data: users});
		cardContainer.innerHTML = output;  
	}
}	

// const saveChanges = document.querySelector('.btn-primary')
// const name = document.querySelector('#inputName').value;
// const username = document.querySelector('#inputUsername').value;
// const email = document.querySelector('#inputEmail').value;

// saveChanges.addEventListener("click", (e)=>{
// 	fetch("https://jsonplaceholder.typicode.com/users",{
//         method:'POST',
//         body:JSON.stringify({text:value}),
//         name,
//         username,
//         email,
//         company: {
// 			name: companyName
// 		},
//     })
// 	e.preventDefault();
// });
// function createUser () {
	// const name = document.querySelector('#inputName').value;
	// const username = document.querySelector('#inputUsername').value;
	// const email = document.querySelector('#inputEmail').value;
	// const company = document.querySelector('#selectCompany').value;

// 	user(name,username,email,company)
// }
// fetch("https://jsonplaceholder.typicode.com/users",{
//         method:'POST',
//         body:JSON.stringify({text:value}),
//         name,
//         username,
//         email,
//         company: {
// 			name: companyName
// 		},
//     })


