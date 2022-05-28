import "./index.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import  Botao  from '../botao/index';
//import gif1 from '../../imagens/gif_1.gif'
//import Botao from '../botao/index'


export function Header() {
  return (
    <header className="header">
      <Navbar bg="light=" expand="lg">
        <Container fluid>
          <Navbar.Brand href="">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="fontColor" href="#action1">Como Funciona</Nav.Link>
              <Nav.Link className="fontColor" href="#action2">Acessar</Nav.Link>
              <Nav.Link className="fontColor" href="#action3">Abrir Conta</Nav.Link>
              <Botao textoBotao="Abrir Conta" corBotao="menu-rosa"/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
