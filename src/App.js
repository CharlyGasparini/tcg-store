import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting = 'Cartas Destacadas'/>} />
          <Route path='/category/:productCategory' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
