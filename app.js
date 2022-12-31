const $container = document.getElementById("container");

const URL_API = "https://rickandmortyapi.com/api/character";

console.log(URL_API);

fetch(URL_API)
  .then((response) => response.json())
  .then((data) => {
    const characters = data.results;

    //Cada cuadro de personaje personaje va a estar dentro de un div
    for (let character of characters) {
      console.log(character);
      $container.innerHTML += `
        <div class="option-name"> <img class="character-img" src="${character.image}" alt="imagen de ${character.name}">
        <h3>${character.name} - ${character.status}</h3>
        </div>
      `;
    }
  });