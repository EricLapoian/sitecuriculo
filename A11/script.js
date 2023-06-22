const pokedex = document.getElementById('pokedex');
fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    const pokemon = data.results;
    pokemon.forEach(p => {
      fetchPokemonData(p);
    });
  });
function fetchPokemonData(pokemon) {
  const url = pokemon.url;
  fetch(url)
    .then(response => response.json())
    .then(pokeData => {
      createPokemonCard(pokeData);
    });
}
function createPokemonCard(pokemon) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.classList.add(`type-${pokemon.types[0].type.name}`);
  const sprite = document.createElement('img');
  sprite.src = pokemon.sprites.front_default;
  const name = document.createElement('h3');
  name.textContent = pokemon.name;
  const types = document.createElement('p');
  types.textContent = `Types: ${pokemon.types.map(type => type.type.name).join(', ')}`;
  card.appendChild(sprite);
  card.appendChild(name);
  card.appendChild(types);
  pokedex.appendChild(card);
}
