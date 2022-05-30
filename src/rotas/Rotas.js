import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Container } from '../components/Container';
import { LoginPage } from '../pages/LoginPage';
import PaginaInicial from '../components/paginaInicial/paginaInicial';
import Extrato from '../components/Extrato/Index';


function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/login" element={<Container><LoginPage /></Container>} />
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/statements" element={<Extrato />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export { Rotas };