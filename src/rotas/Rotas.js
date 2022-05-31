import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Container } from '../components/Container';
import { LoginPage } from '../pages/LoginPage';
import PaginaInicial from '../components/paginaInicial/paginaInicial';
import EditarPerfil from '../components/EditaPerfil/EditarPerfil';
import {Extrato} from '../components/Extrato/Index';
import {LojasMilhas} from '../components/LojasMilhas/Loja'
import {TranferenciaMilhas} from '../components/TransferenciaMilha/transfMilha'



function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/login" element={<Container><LoginPage /></Container>} />
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/statement" element={<Extrato />} />
                <Route path="/edit" element={<EditarPerfil/>} />
                <Route path="/store" element={<Container><LojasMilhas/></Container>} />
                <Route path="/send" element={<Container><TranferenciaMilhas/></Container>}>
                    <Route path=":id" element={<Container><TranferenciaMilhas/></Container>} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export { Rotas };