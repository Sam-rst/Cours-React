import './App.css'

function App() {
  const isTitleDisplayed = true;
  const title = "Hello World";
  const articles = [
    { id: 1, titre: "Article 1", image: "https://mapetiteassiette.com/wp-content/uploads/2021/12/800x600-patate-douce.jpg", description: "Description de l'article 1" },
    { id: 2, titre: "Article 2", image: "https://www.tipiak.fr/sites/default/files/styles/image_verticale/public/recettes/images/Couscous-marocain-TIPIAK.jpg?itok=YwQ_OWpX", description: "Description de l'article 2" },
    { id: 3, titre: "Article 3", image: "https://assets.afcdn.com/recipe/20210304/118354_w1024h576c1cx1060cy707cxt0cyt0cxb2121cyb1414.webp", description: "Description de l'article 3" },
  ];

  const genererArticles = () => {
    return articles.map(article => (
      <div key={article.id} className="article">
        <h2>{article.titre}</h2>
        <img src={article.image} alt={article.titre} />
        <p>{article.description}</p>
      </div>
    ));
  };

  return <div>{isTitleDisplayed ? <h1>{title}</h1> : <h1>Aucun titre d'admis</h1>}{genererArticles()}</div>
}

export default App
