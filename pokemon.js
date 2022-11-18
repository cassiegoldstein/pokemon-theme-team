//this loop grabs every pokemon container individually
const btn = document.querySelector('button');
const pokeContainer = document.querySelector('.pokemon-container');


//generate initial pokemon
function generatePokemon() {
    //declare variables
    const pokemonName = document.querySelector('.pokemon-name');
    const pokemonImage = document.querySelector('.pokemon-image');
    const pokemonType = document.querySelector('.pokemon-type');
    const random = Math.floor(Math.random() * 256 + 1);
    //get random pokemon from api
    axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`)
        .then(response => {
            pokemonName.innerHTML = response.data.forms[0].name;
            pokemonImage.src = response.data.sprites.front_default;
            //retrieve pokemon type
            const team = response.data.types[0].type.name;
            pokemonType.innerHTML = team;
            //call generate team function to retrieve five additional pokemon of same type
            if (team === "normal") {
                pokeContainer.style.backgroundColor = "#ede6e6";
                pokeContainer.style.color = "#000";

            } else if (team === "fire") {
                pokeContainer.style.backgroundColor = "#d16a71";
                pokeContainer.style.color = "#FFF";
            } else if (team === "ground") {
                pokeContainer.style.backgroundColor = "#8c7e7d";
                pokeContainer.style.color = "#FFF";
            } else if (team === "water") {
                pokeContainer.style.backgroundColor = "#6390f0";
                pokeContainer.style.color = "#FFF";
            } else if (team === "grass") {
                pokeContainer.style.backgroundColor = "#88D8B8";
                pokeContainer.style.color = "#000";
            } else if (team === "flying") {
                pokeContainer.style.backgroundColor = "#a98ff3";
            } else if (team === "fighting") {
                pokeContainer.style.backgroundColor = "#c22e28";
                pokeContainer.style.color = "#FFF";
            } else if (team === "poison") {
                pokeContainer.style.backgroundColor = "#a33ea1";
                pokeContainer.style.color = "#FFF";
            } else if (team === "electric") {
                pokeContainer.style.backgroundColor = "#f7d02c";
                pokeContainer.style.color = "#000";

            } else if (team === "rock") {
                pokeContainer.style.backgroundColor = "#b6a136";
                pokeContainer.style.color = "#FFF";
            } else if (team === "psychic") {
                pokeContainer.style.backgroundColor = "#f95587";
                pokeContainer.style.color = "#FFF";
            } else if (team === "ice") {
                pokeContainer.style.backgroundColor = "#96d9d6";
                pokeContainer.style.color = "#000";
            } else if (team === "bug") {
                pokeContainer.style.backgroundColor = "#a6b91a";
                pokeContainer.style.color = "#FFF";
            } else if (team === "ghost") {
                pokeContainer.style.backgroundColor = "#735797";
                pokeContainer.style.color = "#FFF";
            } else if (team === "steel") {
                pokeContainer.style.backgroundColor = "#b7b7ce";
                pokeContainer.style.color = "#000";
            } else if (team === "dragon") {
                pokeContainer.style.backgroundColor = "#6f35fc";
                pokeContainer.style.color = "#fff";
            } else if (team === "dark") {
                pokeContainer.style.backgroundColor = "#705746";
                pokeContainer.style.color = "#fff";
            } else {
                pokeContainer.style.backgroundColor = "#d685ad";
                pokeContainer.style.color = "#fff";
            }
            generateTeam(team);
        })
        .catch(error => {
            //alert if errors
            pokemonName.innerHTML = "An error has occurred.";
            pokemonImage.src = "";
        })
}

//generate team of 5 pokemon of same type as original random pokemon
function generateTeam(team) {
    const pokemonContainers = document.querySelectorAll('.pokemon-team');
    //loop through each container to get 5 different pokemon
    for (const container of pokemonContainers) {
        if (team === "normal") {
            container.style.backgroundColor = "#ede6e6";
            container.style.color = "#000";

        } else if (team === "fire") {
            container.style.backgroundColor = "#d16a71";
            container.style.color = "#FFF";
        } else if (team === "ground") {
            container.style.backgroundColor = "#8c7e7d";
            container.style.color = "#FFF";
        } else if (team === "water") {
            container.style.backgroundColor = "#6390f0";
            container.style.color = "#FFF";
        } else if (team === "grass") {
            container.style.backgroundColor = "#88D8B8";
            container.style.color = "#000";
        } else if (team === "flying") {
            container.style.backgroundColor = "#a98ff3";
        } else if (team === "fighting") {
            container.style.backgroundColor = "#c22e28";
            container.style.color = "#FFF";
        } else if (team === "poison") {
            container.style.backgroundColor = "#a33ea1";
            container.style.color = "#FFF";
        } else if (team === "electric") {
            container.style.backgroundColor = "#f7d02c";
            container.style.color = "#000";
        } else if (team === "rock") {
            container.style.backgroundColor = "#b6a136";
            container.style.color = "#FFF";
        } else if (team === "psychic") {
            container.style.backgroundColor = "#f95587";
            container.style.color = "#FFF";
        } else if (team === "ice") {
            container.style.backgroundColor = "#96d9d6";
            container.style.color = "#000";
        } else if (team === "bug") {
            container.style.backgroundColor = "#a6b91a";
            container.style.color = "#FFF";
        } else if (team === "ghost") {
            container.style.backgroundColor = "#735797";
            container.style.color = "#FFF";
        } else if (team === "steel") {
            container.style.backgroundColor = "#b7b7ce";
            container.style.color = "#000";
        } else if (team === "dragon") {
            container.style.backgroundColor = "#6f35fc";
            container.style.color = "#fff";
        } else if (team === "dark") {
            container.style.backgroundColor = "#705746";
            container.style.color = "#fff";
        } else {
            container.style.backgroundColor = "#d685ad";
            container.style.color = "#fff";
        }



        const pokemonName = container.querySelector('.pokemon-name');
        const pokemonImage = container.querySelector('.pokemon-image');
        const random = Math.floor(Math.random() * 70);
        const pokemonType = container.querySelector('.pokemon-type')
        //retrieve pokemon of given type
        axios.get(`https://pokeapi.co/api/v2/type/${team}`)
            .then(response => {
                //get random pokemon from list of pokemon with given type
                pokemonName.innerHTML = response.data.pokemon[random].pokemon.name;
                //retrieve url to get pokemon image
                const url = response.data.pokemon[random].pokemon.url;
                //call function using url to retrieve pokemon image
                getPoke(url, pokemonImage, pokemonType, team);
            })
            .catch(error => {
                pokemonName.innerHTML = "An error has occurred.";
                pokemonImage.src = "";
            })
    }

}

//function to display pokemon image and type
function getPoke(url, pokemonImage, pokemonType, team) {
    axios.get(`${url}`)
        .then(response => {
            console.log(response.data);
            pokemonImage.src = response.data.sprites.front_default;
            pokemonType.innerHTML = team;
        })
        .catch(error => {
            console.log("error");
        })
}


btn.addEventListener("click", generatePokemon);
