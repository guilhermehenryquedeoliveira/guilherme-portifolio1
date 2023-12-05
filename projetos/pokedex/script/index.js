const pokemonName = document.querySelector('.pokemon-name');
const pokemonNumber = document.querySelector('.pokemon-number');
const pokemonImage = document.querySelector('.pokemon-image');
const form = document.querySelector('.form');
const input = document.querySelector('.input-search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');
let searchPokemon = 0;

const fetchPokemon = async(Pokemon)=>{
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokemon}`);

    if (APIresponse.status === 200) {
        const data = await APIresponse.json();
        return data;
    }
}



const renderPokemon = async (Pokemon)=>{
    pokemonName.innerHTML = "Loading...";
    pokemonNumber.innerHTML = "";
    const data = await fetchPokemon(Pokemon);

    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = "";
    } else {
        pokemonImage.src = ('https://cdn-icons-png.flaticon.com/512/6711/6711603.png')
        pokemonName.innerHTML = " Inválido"
        input.value = "";
    }

    console.log(data);
}



form.addEventListener("submit", (event)=>{
    event.preventDefault();

    renderPokemon(input.value.toLowerCase());
})



buttonPrev.addEventListener("click", ()=>{
    searchPokemon -= 1;
    renderPokemon(searchPokemon)   
});

buttonNext.addEventListener("click", ()=>{
    searchPokemon += 1;
    renderPokemon(searchPokemon)
});

renderPokemon(gengar)