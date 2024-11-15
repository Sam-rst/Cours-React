import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";


const RandomPage = () => {

    const [alcools, setAlcools] = useState(null)

    const getAlcools = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setAlcools(data.drinks)
            })
    }

    useEffect(() => {
        getAlcools()
    }, [])

    return (
        <>
            <Header />
            <h1>Top 6 des alcools (selon Patoche)</h1>
            <main>
                {!alcools ? (<p>Chargement...</p>) : (
                    <div>
                        {alcools.map((alcool) => (
                            <Link key={alcool.idDrink} to={`/alcool/${alcool.idDrink}`}>
                                <h2>{alcool.strDrink}</h2>
                                <img src={alcool.strDrinkThumb} alt={alcool.strDrink} />
                            </Link>
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </>
    );
};

export default RandomPage;