import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function PokemonsPage() {
  const [pokemons, setPokemons] = useState([]);

  fetch("https://pokebuildapi.fr/api/v1/pokemon")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setPokemons(data);
    });

  return (
    <>
      <Header />
      <h1>Pokedex</h1>

      {pokemons.length > 0 ? (
        <ul>
          {pokemons.map((pokemon) => {
            return <li key={pokemon.id}>{pokemon.name} <Link to={"/pokemons/show/:id"}><button>Voir</button></Link></li>;
          })}
        </ul>
      ) : (
        <p>Chargment en cours !</p>
      )}
      <Footer />
    </>
  );
}

export default PokemonsPage;