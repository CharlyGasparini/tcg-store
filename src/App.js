import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartContainer from './components/CartContainer/CartContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { CartProvider } from './context/CartProvider';
import { NotificationsProvider } from './notifications/notificationService';

function App() {

  return (
    <div className="App">
      <NotificationsProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting = 'Featured cards'/>} />
              <Route path='/category/:productCategory' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartContainer />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationsProvider>
    </div>
  );
}

export default App;
