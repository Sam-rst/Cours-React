function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.column}>
                    <h3 style={styles.heading}>À propos</h3>
                    <p>Notre entreprise s'engage à fournir des services de qualité depuis 2010.</p>
                </div>
                <div style={styles.column}>
                    <h3 style={styles.heading}>Liens rapides</h3>
                    <ul style={styles.list}>
                        <li><a href="#" style={styles.link}>Accueil</a></li>
                        <li><a href="#" style={styles.link}>Services</a></li>
                        <li><a href="#" style={styles.link}>Contact</a></li>
                    </ul>
                </div>
                <div style={styles.column}>
                    <h3 style={styles.heading}>Nous contacter</h3>
                    <p>Email : contact@monsite.com</p>
                    <p>Téléphone : +33 1 23 45 67 89</p>
                </div>
            </div>
            <div style={styles.copyright}>
                © {currentYear} MonSite. Tous droits réservés.
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#333',
        color: 'white',
        padding: '1rem 0',
        fontSize: '0.8rem',
        width: '100%',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        maxWidth: '1200px',
        margin: '0 auto',
        flexWrap: 'wrap' as const,
    },
    column: {
        flex: '1',
        margin: '0 0.5rem',
        minWidth: '150px',
    },
    heading: {
        fontSize: '1rem',
        marginBottom: '0.5rem',
    },
    list: {
        listStyle: 'none',
        padding: 0,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        ':hover': {
            textDecoration: 'underline',
        },
    },
    copyright: {
        textAlign: 'center' as const,
        marginTop: '1rem',
        paddingTop: '0.5rem',
        borderTop: '1px solid #555',
    },
};

export default Footer;
