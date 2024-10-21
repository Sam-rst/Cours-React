document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    const articles = [
        { title: 'Article 1', image: 'https://mapetiteassiette.com/wp-content/uploads/2021/12/800x600-patate-douce.jpg' },
        { title: 'Article 2', image: 'https://www.tipiak.fr/sites/default/files/styles/image_verticale/public/recettes/images/Couscous-marocain-TIPIAK.jpg?itok=YwQ_OWpX' },
        { title: 'Article 3', image: 'https://assets.afcdn.com/recipe/20210304/118354_w1024h576c1cx1060cy707cxt0cyt0cxb2121cyb1414.webp' },
        { title: 'Article 4', image: 'https://www.tipiak.fr/sites/default/files/styles/image_verticale/public/recettes/images/Couscous-marocain-TIPIAK.jpg?itok=YwQ_OWpX' },
        { title: 'Article 5', image: 'https://assets.afcdn.com/recipe/20210304/118354_w1024h576c1cx1060cy707cxt0cyt0cxb2121cyb1414.webp' },
        { title: 'Article 6', image: 'https://assets.afcdn.com/recipe/20210304/118354_w1024h576c1cx1060cy707cxt0cyt0cxb2121cyb1414.webp' },
        { title: 'Article 5', image: 'https://assets.afcdn.com/recipe/20210304/118354_w1024h576c1cx1060cy707cxt0cyt0cxb2121cyb1414.webp' },
        { title: 'Article 6', image: 'https://assets.afcdn.com/recipe/20210304/118354_w1024h576c1cx1060cy707cxt0cyt0cxb2121cyb1414.webp' },
        { title: 'Article 5', image: 'https://assets.afcdn.com/recipe/20210304/118354_w1024h576c1cx1060cy707cxt0cyt0cxb2121cyb1414.webp' },
        { title: 'Article 6', image: 'https://assets.afcdn.com/recipe/20210304/118354_w1024h576c1cx1060cy707cxt0cyt0cxb2121cyb1414.webp' },
        { title: 'Article 5', image: 'https://assets.afcdn.com/recipe/20210304/118354_w1024h576c1cx1060cy707cxt0cyt0cxb2121cyb1414.webp' },
        { title: 'Article 6', image: 'https://assets.afcdn.com/recipe/20210304/118354_w1024h576c1cx1060cy707cxt0cyt0cxb2121cyb1414.webp' },
        { title: 'Article 5', image: 'https://assets.afcdn.com/recipe/20210304/118354_w1024h576c1cx1060cy707cxt0cyt0cxb2121cyb1414.webp' },
        { title: 'Article 6', image: 'https://assets.afcdn.com/recipe/20210304/118354_w1024h576c1cx1060cy707cxt0cyt0cxb2121cyb1414.webp' },
    ];

    // Créer un conteneur pour la ligne d'articles
    let rowElement = document.createElement('div');
    rowElement.style.display = 'flex';
    rowElement.style.justifyContent = 'space-between';
    rowElement.style.marginBottom = '20px';
    rowElement.style.marginInline = "10px";

    articles.forEach((article, index) => {
        const articleElement = document.createElement('article');
        articleElement.style.width = '48%';
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = article.title;
        
        const imageElement = document.createElement('img');
        imageElement.src = article.image;
        imageElement.alt = article.title;

        articleElement.appendChild(titleElement);
        articleElement.appendChild(imageElement);
        
        rowElement.appendChild(articleElement);

        if ((index + 1) % 2 === 0 || index === articles.length - 1) {
            root.appendChild(rowElement);
            rowElement = document.createElement('div');
            rowElement.style.display = 'flex';
            rowElement.style.justifyContent = 'space-between';
            rowElement.style.marginBottom = '20px';
        }
    });
});
