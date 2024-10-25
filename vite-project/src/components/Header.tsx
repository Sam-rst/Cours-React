function Header({pageTitle, user=null}: any) {
    const styles = {
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            backgroundColor: '#333',
            color: 'white',
            position: 'fixed' as const,
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
        },
        navList: {
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
        },
        navItem: {
            marginLeft: '1rem',
        },
        navLink: {
            color: 'white',
            textDecoration: 'none',
            ':hover': {
                textDecoration: 'underline',
            },
        },
    };

    return (
        <header>
            <h1>{pageTitle}</h1>
            <nav style={styles.nav}>
                <div style={styles.logo}>MonSite</div>
                <ul style={styles.navList}>
                    <li style={styles.navItem}><a href="#" style={styles.navLink}>Accueil</a></li>
                    <li style={styles.navItem}><a href="#" style={styles.navLink}>À propos</a></li>
                    <li style={styles.navItem}><a href="#" style={styles.navLink}>Services</a></li>
                    <li style={styles.navItem}><a href="#" style={styles.navLink}>Contact</a></li>
                </ul>
            </nav>
            {user ? <p>Bienvenue {user} !</p> : <p>Merci de vous connecter</p>}
        </header>
    );
}


export default Header;
