import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";


const AlcoolShowPage = () => {
    const { id } = useParams()
    const [alcool, setAlcool] = useState(null)

    const getAlcool = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
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
                {!alcool ? (<p>Chargement...</p>) : (
                    <div>
                        <h2>{alcool.strDrink}</h2>
                        <img src={alcool.strDrinkThumb} alt={alcool.strDrink} />
                        <h2>Catégorie</h2>
                        <p>{alcool.strCategory}</p>
                        <h2>Ingrédients</h2>
                        <ul id="ingredients">
                            {[...Array(15)].map((_, i) => {
                                const ingredient = alcool[`strIngredient${i + 1}`];
                                return ingredient ? '' : <li>ingredient</li>
                            })}
                        </ul>
                        <h2>Instructions</h2>
                        <ul id="measures">
                            {...Array(15).map((_, i) => {
                                const measure = alcool[`strMeasure${i + 1}`];
                                return (!measure ? '' : <li>measure</li>)
                            })}
                        </ul>
                    </div>
                )}
            </main>

            <Footer />
        </>
    );
};

export default AlcoolShowPage;