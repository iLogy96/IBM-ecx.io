const source = document.querySelector("#cardsTemplate").innerHTML;
const cardContainer = document.querySelector(".card-container");


const generateRandomPokemon = () => 
  Math.floor(Math.random() * 898 + 1);

const fetchPokemonData = () => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${generateRandomPokemon()}`).then(
    (res) => res.json()
  );
};

const handlebars = (data) =>{
    const template = Handlebars.compile(source);
    const output = template({ cards: data });
    cardContainer.innerHTML = output;
}

const renderPokeCards = async () => {
  await fetchPokemonData().then((card) => {
    // handlebars(card)
    console.log(card);
  });
};
renderPokeCards();


// function generateRandomPokemon(){
//   return Math.floor(Math.random() * 898 + 1);
// }
