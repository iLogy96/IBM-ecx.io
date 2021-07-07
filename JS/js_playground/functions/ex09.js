let renderList = () =>{
    const color = ['tomato','orange','dodgerblue','mediumseagreen','gray','slateblue','violet','lightgray','lightblue','coral'];
    const listContainer = document.createElement('ul');
    const listSize = 10
    for (let i = 0;i<listSize;i++){
        let li = document.createElement('li');
        let content = document.createTextNode(i);
        li.style.color = color[i];
        li.appendChild(content);
        listContainer.appendChild(li);
    }
    document.querySelector('body').appendChild(listContainer);
}
renderList();