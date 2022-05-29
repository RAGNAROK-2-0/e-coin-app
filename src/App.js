import './App.css';
// import PaginaInicial from './components/paginaInicial/paginaInicial';
import { FundoSite } from './components/FundoSite';
import { Rotas } from './rotas/Rotas'


function App() {
  return (
    <FundoSite>
      <Rotas />
    </FundoSite>
  );
}

export default App;
