import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Container } from '../components/Container';
import { LoginPage } from '../pages/LoginPage'


function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    );
}

export { Rotas };