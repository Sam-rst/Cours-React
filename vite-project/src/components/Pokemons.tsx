import { useState } from "react";

function Pokemons() {
    const [pokemons, setPokemons] = useState([]);

    fetch("https://pokebuildapi.fr/api/v1/pokemon")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setPokemons(data)
        })

    return (
        <div>
            <h1>Pokemons</h1>

            {pokemons ? (
                <ul>
                    {pokemons.map((pokemon) => {
                        return <li key={pokemon.id}>{pokemon.name}</li>
                    }
                    )}
                </ul>
            ) : (
                <p>Chargement en cours !</p>
            )}
        </div>
    );
}

export default Pokemons;