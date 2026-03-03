import { Navbar } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Pizzéria</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/pizzak">Összes pizza</Nav.Link>
            <Nav.Link href="/kosar">Kosár</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;