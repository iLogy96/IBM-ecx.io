const btn = document.querySelector("js-fetch")

function checkAuth() {
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve('Checking auth...');
        },2000);
    });
}

function fetchUser() {
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve('Fetching user...');
        },2000);
    });
}

function printUser() {
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve('Lara');
        },2000);
    });
}


async function print() {
    const auth = await checkAuth();
    console.log(auth);
    const fetch = await fetchUser();
    console.log(fetch);
    const user = await printUser();
    console.log(user);
}