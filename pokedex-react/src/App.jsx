import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonsPage from "./pages/PokemonsPage";
import HomePage from "./pages/HomePage";
import PokemonShowPage from './pages/PokemonShowPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemons" element={<PokemonsPage />} />
        <Route path="/pokemons/show/:id" element={<PokemonShowPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;