import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body className='App-body'>
        <ItemListContainer greeting = 'Cartas Destacadas'/>
      </body>
    </div>
  );
}

export default App;
