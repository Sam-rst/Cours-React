import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ShowRecettePage from './pages/ShowDetailsRecettePage'
import RandomRecettePage from './pages/RandomPage'
import ListeRecettesPage from './pages/ListeRecettesPage'
import ShowRecettesByCategoriePage from './pages/ShowRecettesByCategoriePage'
import ShowRecettesByIngredientPage from './pages/ShowRecettesByIngredientPage'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recette/:id" element={<ShowRecettePage />} />
          <Route path="/recette/random" element={<RandomRecettePage />} />
          <Route path="/recettes" element={<ListeRecettesPage />} />
          <Route path="/recettes/filter/ingredient/:ingredient" element={<ShowRecettesByIngredientPage />} />
          <Route path="/recettes/filter/categorie/:categorie" element={<ShowRecettesByCategoriePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
