function Sidebar({ isMailDisplayed=false }: any) {


    return (
        <aside>
            <p>Horaires d'ouverture : </p>

            <ul>
                <li>Matin : 8h -12h</li>
                <li>Soir : 16h -22h</li>
            </ul>

            {isMailDisplayed && <p>Contact : test@test.fr</p>}
        </aside>
    );
}

export default Sidebar