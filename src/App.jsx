import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router"
import { withLoading } from './hoc/withLoading'

const ItemListContainerWithLoading = withLoading(ItemListContainer)

const App = () => {
  return (
<BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainerWithLoading />} />
      <Route path="/category/:name" element={<ItemListContainerWithLoading />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App
