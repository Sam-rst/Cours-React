import { useState } from "react"
import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

function PokemonShowPage() {
    const { id } = useParams()

    const [pokemon, setPokemon] = useState(null)

    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setPokemon(data)
        })

    return (
        <>
            <Header />
            <h1>Pokedex</h1>
            <h2>Page de détails d'un Pokémon</h2>
            {!pokemon ? (<p>Il n'y a pas de pokemon avec cet id</p>) : (
                <div>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <p>Nom : {pokemon.name}</p>
                </div>
            )}
            <Footer />
        </>
    )
}
export default PokemonShowPage