import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/top6">Top 6</Link>
                    </li>
                    <li>
                        <Link to="/random">Alcools aléatoires</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;