import './App.css';
// import PaginaInicial from './components/paginaInicial/paginaInicial';
import { FundoSite } from './components/FundoSite';
import { Rotas } from './rotas/Rotas'
import { CookiesProvider } from 'react-cookie';
import { DataProvider } from './context/DataContext'


function App() {
  return (
    <FundoSite>
      <CookiesProvider>
        <DataProvider>
          <Rotas />
        </DataProvider>
      </CookiesProvider>
    </FundoSite>
  );
}

export default App;
