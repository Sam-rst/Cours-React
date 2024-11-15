import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";

export default function ShowRecettesByCategoriePage() {
  const { categorie } = useParams()

  const [recettes, setRecettes] = useState(null)

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${categorie}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setRecettes(data.meals)
      })
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="jumbotron text-center p-5 m-5">
          <div className="container">
            <h1 className="jumbotron-heading">Liste des recettes par catégorie</h1>
            <p className="lead text-muted">Bienvenue sur cauchemar en cuisine, je m'appelle Philippe EtcheBEST parce que je suis le meilleur.</p>
            <p>
              <a href="/" className="btn btn-primary btn-lg my-2 mx-1">Accueil</a>
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

      </main>

      <Footer />
    </>
  );
};