import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar />
      <header className="App-header">
        <img className="hero "src='./images/pokemon-banner.png' alt='pokemon escudo y espada pre-release' />
      </header>
      <body className='App-body'>
        <ItemListContainer greeting = 'Cartas Destacadas'/>
      </body>
    </div>
  );
}

export default App;
