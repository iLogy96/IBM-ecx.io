console.log('Exercise template 03');
const color = ['tomato','orange','dodgerblue','mediumseagreen','gray','slateblue','violet','lightgray','lightblue','coral'];
function renderList () {
	const listContainer = document.createElement('ul');
	const listSize = 10;
	for (let i = 0;i<=listSize;i++){
		let li = document.createElement('LI');
		let liText = document.createTextNode(i);
		li.style.color = color[i]
		li.appendChild(liText);
		listContainer.appendChild(li);
		 // prije appenda
	}
	/* Write for loop that will create "li" elements with text of 
	the current index. Add li elements to the listContainer
	for() {
		
    }
    */
	document.querySelector('body').appendChild(listContainer);
}

renderList();