//fetch with handle bars
fetch ("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderData(data)
    })
    .catch(err=>{
        console.log(err.message)
    });

function renderData(photo) {
    const albumContainer = document.querySelector('.album');
    const source = document.querySelector('#imageTemplate').innerHTML;
    const template = Handlebars.compile(source);
    const output = template({ data:photo });
    albumContainer.innerHTML = output;
}