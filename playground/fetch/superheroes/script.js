const header = document.querySelector('header');
const section = document.querySelector('section');

const fetchData = () => {
    return fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    .then(res => res.json())
}

const handlebarsHeader = (header) => {
    const source = document.querySelector("#headerTemplate").innerHTML;
    const headerContainer = document.querySelector('.container');
    const template = Handelbars.compile(source);
    const output = template({data:header})
    headerContainer.innerHTML = output;
}

const renderHeader = () => {
    fetchData()
    .then()
}
