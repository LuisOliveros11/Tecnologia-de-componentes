import logo from './logo.svg';
import './App.css';
import BasicExample from './Card';
import Search_bar from './Search_bar';


function App() {
  return (
    <div className="App">
      <header className='cabecera'>
      <img src='https://img.freepik.com/vector-premium/logotipo-diseno-alimentos-calidad-catering_187482-593.jpg'></img>
      <p>
        Recetas de cocina
      </p>
      </header>
      <Search_bar/>
      <BasicExample/>
    </div>
  );
}

export default App;
