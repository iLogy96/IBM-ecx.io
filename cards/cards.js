const container = document.querySelector('.container')
const input = document.querySelector('.search')

let users = [];
let newUsers = [];
let userCompany = [];
let userNames = [];
let searchResult;

const appStart = () => {
    fetchUser();
    input.addEventListener('input', searchFilter);
}

const fetchUser = () => {
    return fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data => {
            users = data
            storeUsers()
        }).then(() =>
            renderCards(users, "#cards", ".container"))
}

const renderCards = (data, SOURCE_SELECTOR, OUTPUT_SELECTOR) => {
    const source = document.querySelector(SOURCE_SELECTOR).innerHTML
    const template = Handlebars.compile(source)
    const output = template({data});
    document.querySelector(OUTPUT_SELECTOR).innerHTML = output;
}

const storeUsers = () => {
    users.forEach((user) => {
        userNames.push(user.name)
        userCompany.push(user.company.name)
    })
}

const searchFilter = (event) => {
    newUsers = [];
    searchResult = userNames.filter(name =>
        name.toLowerCase().startsWith(event.target.value) || name.toLowerCase().indexOf(event.target.value.toUpperCase()) > -1);
    users.forEach(user => {
        if (searchResult.indexOf(user.name) > -1) {
            newUsers.push(user);
        }
        renderCards(newUsers, "#cards", ".container")
    })
}

appStart();