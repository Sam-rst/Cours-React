
function ListArticles() {
    const articles = [
        { id: 1, title: "Article 1", image: "https://mapetiteassiette.com/wp-content/uploads/2021/12/800x600-patate-douce.jpg", description: "Description de l'article 1" },
        { id: 2, title: "Article 2", image: "https://www.tipiak.fr/sites/default/files/styles/image_verticale/public/recettes/images/Couscous-marocain-TIPIAK.jpg?itok=YwQ_OWpX", description: "Description de l'article 2" },
        { id: 3, title: "Article 3", image: "https://assets.afcdn.com/recipe/20210304/118354_w1024h576c1cx1060cy707cxt0cyt0cxb2121cyb1414.webp", description: "Description de l'article 3" },
        { id: 4, title: "Article 4", image: "https://ffcuisine.fr/wp-content/uploads/2024/06/1718492522_recette-facile-de-chicken-burger-gourmand-et-rapide.jpg", description: "Description de l'article 4" },
        { id: 5, title: "Article 5", image: "https://i1.sndcdn.com/artworks-000119459097-sglzh5-t500x500.jpg", description: "Description de l'article 5" },
    ];
    
    const genererArticles = () => {
        return articles.map(article => (
            <div key={article.id} style={styles.article}>
                <h2 style={styles.title}>{article.title}</h2>
                <div style={styles.imageContainer}>
                    <img src={article.image} alt={article.title} style={styles.image} />
                </div>
                <p style={styles.description}>{article.description}</p>
            </div>
        ));
    };

    return <div style={styles.container}>{genererArticles()}</div>;
}

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap' as const,
        justifyContent: 'space-around',
        padding: '20px',
        margin: '2rem'
    },
    article: {
        width: '45%',
        margin: '10px',
        padding: '15px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        borderRadius: '8px',
    },
    title: {
        fontSize: '1.5rem',
        marginBottom: '10px',
    },
    imageContainer: {
        width: '100%',
        height: '300px',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover' as const,
        objectPosition: 'center',
    },
    description: {
        marginTop: '10px',
    },
};

export default ListArticles;
