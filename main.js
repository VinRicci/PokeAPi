const pokemonContainer =document.querySelector('.pokemon-container');

function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
        createPokemon(data);
    })
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function fetchPokemons(number){
    for(let i = 1; i <= number; i++){
        let random = getRandomIntInclusive(1,150);
        fetchPokemon(random);
    }
}

function createPokemon(pokemon){
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite);
    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);
}

fetchPokemons(6);