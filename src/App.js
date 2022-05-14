import './App.css';
// import PaginaInicial from './components/paginaInicial/paginaInicial';
import { FundoSite } from './components/FundoSite';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Container } from './components/Container';
import { LoginPage } from './pages/LoginPage'

function App() {
  return (
    <FundoSite>
      <Header />
      <Container>
         <LoginPage />
      </Container>
      <Footer />
    </FundoSite>
  );
}

export default App;
