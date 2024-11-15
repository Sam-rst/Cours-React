import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";

export default function ShowDetailsRecettePage() {
  const { id } = useParams()

  const [recette, setRecette] = useState(null)

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setRecette(data.meals[0])
      })
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="jumbotron text-center p-5 m-5">
          <div className="container">
            <h1 className="jumbotron-heading">Détails de la recette</h1>
            <p className="lead text-muted">Bienvenue sur cauchemar en cuisine, je m'appelle Philippe EtcheBEST parce que je suis le meilleur.</p>
            <p>
              <a href="/recettes" className="btn btn-primary btn-lg my-2 mx-1">Liste de recettes</a>
              <a href="/recette/random" className="btn btn-secondary btn-lg my-2 mx-1">Recette aléatoire</a>
            </p>
          </div>
        </section>
        {!recette ? (<p>Chargement...</p>) : (
          <div className="album py-5 bg-light">
            <h2 className="d-flex justify-content-center mb-3">{recette.strMeal}</h2>

            <div className="container">
              <div class="card">
                <img src={recette.strMealThumb} class="card-img-top" alt={recette.strMeal}></img>
                <div class="card-body">
                  <h5 class="card-title">Ingrédients</h5>
                  <ul>
                    {[...Array(15)].map((_, i) => {
                      const ingredient = recette[`strIngredient${i + 1}`];
                      return ingredient ? <li key={i}>{ingredient}</li> : null;
                    })}
                  </ul>
                  <h5 class="card-title">Pays origine</h5>
                  <p class="card-text">{recette.strArea}</p>
                  <h5 class="card-title">Catégorie</h5>
                  <p class="card-text">{recette.strCategory}</p>
                  <h5 class="card-title">Instructions</h5>
                  <p class="card-text">{recette.strInstructions}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};