import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
      <div className="App">
          <NavBar />
          <ItemListContainer welcomeMessage="¡Upss Pagina en construccion!" />
      </div>
  );
};

export default App
