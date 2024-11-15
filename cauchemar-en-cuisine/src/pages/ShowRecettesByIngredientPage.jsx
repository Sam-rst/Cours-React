import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ShowRecettesByIngredientPage() {
    const { ingredient } = useParams()

    const [recettes, setRecettes] = useState(null)

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
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
      <h1>Liste des recettes par ingrédient</h1>
      <main>
        <p>Bienvenu !</p>
      </main>

      <Footer />
    </>
  );
};