class ArticleDTO {
    constructor(title, image, description) {
        this.title = title;
        this.image = image;
        this.description = description;
    }
}

class ArticleGallery {
    constructor(rootElement) {
        this.root = rootElement;
        this.articles = [];
    }

    addArticle(article) {
        this.articles.push(article);
    }

    createArticleElement(article) {
        const articleElement = document.createElement('article');
        articleElement.style.width = '48%';
        articleElement.style.display = 'flex';
        articleElement.style.flexDirection = 'column';
        articleElement.style.alignItems = 'center';
        articleElement.style.textAlign = 'center';
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = article.title;
        
        const imageContainer = document.createElement('div');
        imageContainer.style.width = '100%';
        imageContainer.style.height = '200px'; // Hauteur fixe pour toutes les images
        imageContainer.style.overflow = 'hidden';
        imageContainer.style.display = 'flex';
        imageContainer.style.justifyContent = 'center';
        imageContainer.style.alignItems = 'center';

        const imageElement = document.createElement('img');
        imageElement.src = article.image;
        imageElement.alt = article.title;
        imageElement.style.width = '100%';
        imageElement.style.height = '100%';
        imageElement.style.objectFit = 'cover';
        imageElement.style.objectPosition = 'center';
        
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = article.description;

        imageContainer.appendChild(imageElement);
        articleElement.appendChild(titleElement);
        articleElement.appendChild(imageContainer);
        articleElement.appendChild(descriptionElement);

        return articleElement;
    }

    createRowElement() {
        const rowElement = document.createElement('div');
        rowElement.style.display = 'flex';
        rowElement.style.justifyContent = 'space-between';
        rowElement.style.marginBottom = '20px';
        rowElement.style.marginInline = "10px";
        return rowElement;
    }

    render() {
        let rowElement = this.createRowElement();

        this.articles.forEach((article, index) => {
            const articleElement = this.createArticleElement(article);
            rowElement.appendChild(articleElement);

            if ((index + 1) % 2 === 0 || index === this.articles.length - 1) {
                this.root.appendChild(rowElement);
                rowElement = this.createRowElement();
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const gallery = new ArticleGallery(root);

    gallery.addArticle(new ArticleDTO("Article 1", "https://mapetiteassiette.com/wp-content/uploads/2021/12/800x600-patate-douce.jpg", "lorem50"));
    gallery.addArticle(new ArticleDTO("Article 2", "https://www.tipiak.fr/sites/default/files/styles/image_verticale/public/recettes/images/Couscous-marocain-TIPIAK.jpg?itok=YwQ_OWpX", "lorem50"));
    gallery.addArticle(new ArticleDTO("Article 3", "https://assets.afcdn.com/recipe/20210304/118354_w1024h576c1cx1060cy707cxt0cyt0cxb2121cyb1414.webp", "lorem50"));
    gallery.addArticle(new ArticleDTO("Article 4", "https://burgerkingfrance.twic.pics/img/products/3/3a/33aafa27-dc2e-4ba8-98d5-a1c43a7fee3a_?twic=v1/contain=700x700", "lorem50"));
    gallery.addArticle(new ArticleDTO("Article 5", "https://assets.afcdn.com/recipe/20210304/118354_w1024h576c1cx1060cy707cxt0cyt0cxb2121cyb1414.webp", "lorem50"));
    gallery.addArticle(new ArticleDTO("Article 6", "https://www.tipiak.fr/sites/default/files/styles/image_verticale/public/recettes/images/Couscous-marocain-TIPIAK.jpg?itok=YwQ_OWpX", "lorem50"));

    gallery.render();
});
