import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RandomPage from './pages/RandomPage';
import AlcoolShowPage from './pages/AlcoolShowPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/random" element={<RandomPage />} />
        <Route path="/alcool/:id" element={<AlcoolShowPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;