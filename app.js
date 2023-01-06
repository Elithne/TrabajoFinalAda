const $container = document.getElementById("container");

const URL_API = "https://rickandmortyapi.com/api/character";

console.log(URL_API);

fetch(URL_API)
.then((response) => response.json()) 
.then((data) => {
    const characters = data.results;
    const background = document.querySelector('.characters');

    for (let character of characters){
        console.log (character);
        $container.innerHTML += `
        <div class="characters">
        <h3>${character.name}</h3>
        <img class="character-img" src="${character.image}" alt="${character.name}">
        <h4>Basic Info:</h4>
        <p>${character.gender} - ${character.species}</p>
        <h4>Location:</h4>
        <p>${character.location.name}</p>
        <h4>Status:</h4>
        <p>${character.status}</p>
        </div>`;       
    }
  }
);