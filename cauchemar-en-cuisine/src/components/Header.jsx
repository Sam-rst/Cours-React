import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://upload.wikimedia.org/wikipedia/fr/e/e2/Logo_Cauchemar_en_cuisine.png" alt="Bootstrap" height="24" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/recette/random">Aléatoire</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/recettes">Recettes</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Rechercher</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;