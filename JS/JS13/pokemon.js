async function renderPokemon() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomID()}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      pokedex(data)
    })
    .catch((err) => {
      console.log(`Ne šljaka ${err.message}`);
    });
}

function pokedex (pokemon){
    const pokemonAlbum = document.querySelector("div");
    pokemonAlbum.innerHTML = "";
    const pokemonImage = document.createElement("img");
    const pokemonName = document.createElement("div");
    pokemonName.style.fontSize = '2rem';
    const pokemonNameContent = document.createTextNode(pokemon.species.name.toUpperCase())
    // const evolvesTo = document.createElement("span");
    // const evolvesToContent = document.createElement()

    pokemonImage.style.width = "300px";
    pokemonImage.style.height = "300px";
    pokemonImage.src = pokemon.sprites.front_default;
    pokemonName.appendChild(pokemonNameContent);

    pokemonAlbum.appendChild(pokemonImage);
    pokemonAlbum.appendChild(pokemonName);
}
function randomID() {
  return Math.floor(Math.random() * 898);
}
