import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router"


const App = () => {
  return (
<BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:name" element={<ItemListContainer />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App
