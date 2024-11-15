import { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HomePage() {
    const [recettes, setRecettes] = useState(null)
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setRecettes(data.meals.slice(0, 6))
            })
    }, [])

    const [ingredients, setIngredients] = useState(null)
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setIngredients(data.meals.slice(0, 6))
            })
    }, [])

    const [categories, setCategories] = useState(null)
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setCategories(data.categories.slice(0, 6))
            })
    }, [])

    return (
        <>
            <Header />
            <main>
                <section className="jumbotron text-center p-5 m-5">
                    <div className="container">
                        <h1 className="jumbotron-heading">Page d'accueil</h1>
                        <p className="lead text-muted">Bienvenue sur cauchemar en cuisine, je m'appelle Philippe EtcheBEST parce que je suis le meilleur.</p>
                        <p>
                            <a href="/recettes" className="btn btn-primary btn-lg my-2 mx-1">Liste de recettes</a>
                            <a href="/recette/random" className="btn btn-secondary btn-lg my-2 mx-1">Recette aléatoire</a>
                        </p>
                    </div>
                </section>
                <div className="album py-5 bg-light">
                    <h2 className="d-flex justify-content-center mb-3">Recettes</h2>

                    <div className="container">
                        {!recettes ? (<p>Chargement...</p>) : (
                            <div className="row d-flex justify-content-center">
                                {recettes.map((recette) => (
                                    <div className="col-md-4">
                                        <Card key={recette.idMeal} imgPath={recette.strMealThumb} description={""} title={recette.strMeal} btnPathLink={"/recette/" + recette.idMeal} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="album py-5">
                    <h2 className="d-flex justify-content-center mb-3">Ingrédients</h2>

                    <div className="container">
                        {!ingredients ? (<p>Chargement...</p>) : (
                            <div className="row d-flex justify-content-center">
                                {ingredients.map((ingredient) => (
                                    <div className="col-md-4">
                                        <Card key={ingredient.idIngredient} imgPath={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`} description={ingredient.strDescription.slice(0, 100) + " ..."} title={ingredient.strIngredient} btnPathLink={"/recettes/filter/ingredient/" + ingredient.idIngredient} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="album py-5 bg-light">
                    <h2 className="d-flex justify-content-center mb-3">Catégories</h2>

                    <div className="container">
                        {!categories ? (<p>Chargement...</p>) : (
                            <div className="row d-flex justify-content-center">
                                {categories.map((categorie) => (
                                    <div className="col-md-4">
                                        <Card key={categorie.idCategory} imgPath={categorie.strCategoryThumb} description={categorie.strCategoryDescription.slice(0, 100) + " ..."} title={categorie.strCategory} btnPathLink={"/recettes/filter/" + categorie.idCategory} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};