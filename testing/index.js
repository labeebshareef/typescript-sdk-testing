const pokeapi = require('dist');

pokeapi.getPokemonById(1).then((pokemon) => {
  console.log(pokemon);
});