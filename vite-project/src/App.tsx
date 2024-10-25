import './App.css'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import ListArticles from './components/ListArticles.tsx'
import Sidebar from './components/Sidebar.tsx'
import Counter from './components/Counter.tsx'
import Message from './components/Message.tsx'
import Pokemons from './components/Pokemons.tsx'

function App() {


  return (
    <div>
      <Header pageTitle="Page principale" user="" />

      <Counter />
      <Message />
      <ListArticles />
      <Sidebar isMailDisplayed={false} />
      <Pokemons />


      <Footer />
    </div>
  )
}

export default App
