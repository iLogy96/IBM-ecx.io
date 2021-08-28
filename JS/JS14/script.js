const p = document.querySelector(".activity");
const button = document.querySelector("button");

function showActivity(activity) {
    p.innerHTML = activity;
}

function renderButtonColor(type){
    switch(type){
        case 'education':
            button.style.background = 'red'
            break;
        case 'recreational':
            button.style.background = 'blue'
            break;
        case 'social':
            button.style.background = 'green'
            break;
        case 'diy':
            button.style.background = 'yellow'
            break;
        case 'charity':
            button.style.background = 'brown'
            break;
        case 'cooking':
            button.style.background = 'gold'
            break;
        case 'relaxation':
            button.style.background = 'pink'
            break;
        case 'music':
            button.style.background = 'tomato'
            break;
        case 'busywork':
            button.style.background = 'cadetblue'
            break;
    }
}

button.addEventListener("click", async() => {
    await fetch("https://www.boredapi.com/api/activity/")
    .then(response => response.json())
    .then(data => {
    showActivity(data.activity) 
    renderButtonColor(data.type)
})
})
//     .then(data => {
//     renderButtonColor(data.type)
//     return data
// })

//ex02

document.querySelector(".js-translate").addEventListener("click",async(e)=>{
    const value=document.querySelector(".js-text").value;
    let yodaApi=await fetch("https://api.funtranslations.com/translate/yoda.json",{
        method:'POST',
        body:JSON.stringify({text:value}),
        headers:{
            'Content-Type':'application/json'
        }    
    })
    const yodaResponse=await yodaApi.json();
    console.log(yodaResponse);
    e.preventDefault();
})

//napomena mozes pisati sve posebno ovako
const fetchCountries = () => {
    return fetch ('url').then(res => res.json())
}

const renderCards = () => {
    fetchCountries().then((data) => {
        nekaFunkcija(data);
    });
}