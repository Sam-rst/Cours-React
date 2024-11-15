import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";


const RandomPage = () => {

    const [alcool, setAlcool] = useState(null)

    const getAlcool = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setAlcool(data.drinks[0])
            })
    }

    useEffect(() => {
        getAlcool()
    }, [])

    return (
        <>
            <Header />
            <h1>Alcool aléatoire (quand Patoche est torché)</h1>
            <main>
                {!alcool ? (<p>Aucun alcool...</p>) : (
                    <div>
                        <button onClick={getAlcool}>Nouveau cocktail</button>
                        <h2>{alcool.strDrink}</h2>
                        <img src={alcool.strDrinkThumb} alt={alcool.strDrink} />
                    </div>
                )}
            </main>

            <Footer />
        </>
    );
};

export default RandomPage;