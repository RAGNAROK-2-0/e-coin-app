import "./index.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import Botao from "../botao/index";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import gif_1 from "../../imagens/gif_1.gif";

export function Header() {
  const { Credentials } = useContext(DataContext);
  const isAuth = !!Credentials.getCpfUser();
  if (isAuth) {
    return (
      <header className="header">
        <Navbar bg="light=" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">E-COIN</Navbar.Brand>
            <Navbar.Brand href="">
              <img width={150} height={150} src={gif_1} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Nav>
                <Botao textoBotao="Como Funciona" corBotao="menu-preto" />
                <Botao textoBotao="Acessar" corBotao="menu-preto" />
                <Botao textoBotao="Abrir Conta" corBotao="rosa" />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  } else {
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
                <Nav.Link className="fontColor" href="#action1">
                  Como Funciona
                </Nav.Link>
                <Nav.Link className="fontColor" href="#action2">
                  Acessar
                </Nav.Link>
                <Nav.Link className="fontColor" href="#action3">
                  Abrir Conta
                </Nav.Link>
                <Botao textoBotao="Abrir Conta" corBotao="menu-rosa" />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
