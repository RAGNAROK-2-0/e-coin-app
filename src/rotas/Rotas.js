import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Container } from '../components/Container';
import { LoginPage } from '../pages/LoginPage';
import PaginaInicial from '../components/paginaInicial/paginaInicial';
import EditarPerfil from '../components/EditaPerfil/EditarPerfil';
import {Extrato} from '../components/Extrato/index';



function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/login" element={<Container><LoginPage /></Container>} />
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/statement" element={<Container><Extrato /></Container>} />
                <Route path="/edit" element={<EditarPerfil/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export { Rotas };