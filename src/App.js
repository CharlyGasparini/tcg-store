import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className='App-body'>
        <ItemListContainer greeting = 'Cartas Destacadas'/>
        <ItemDetailContainer />
      </div>
    </div>
  );
}

export default App;
