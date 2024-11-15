import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "../components/Card";

export default function RandomRecettePage() {

    const [recette, setRecette] = useState(null)

    const getRecette = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setRecette(data.meals[0])
            })
    }

    useEffect(() => {
        getRecette()
    }, [])

    return (
        <>
            <Header />
            <main>
                <section className="jumbotron text-center p-5 m-5">
                    <div className="container">
                        <h1 className="jumbotron-heading">Recette aléatoire</h1>
                        <p className="lead text-muted">Bienvenue sur cauchemar en cuisine, je m'appelle Philippe EtcheBEST parce que je suis le meilleur.</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <button className="btn btn-outline-dark" onClick={getRecette}>Nouvelle recette</button>
                        </div>
                    </div>
                </section>
                <div className="album bg-light">

                    <div className="container py-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-4">
                                {!recette ? (<p>Chargement...</p>) : (
                                    <Card key={recette.idMeal} imgPath={recette.strMealThumb} description={recette.strInstructions.slice(0, 100) + " ..."} title={recette.strMeal} btnPathLink={"/recette/" + recette.idMeal} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </>
    );
};