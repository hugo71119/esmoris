import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

function BasicExample() {
  return (
    <>
        <Navbar className="nav-bg"  expand="lg">
        <Container>
            <Link className="nav-link" to="/">Icono</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bolder">
                <Link className="nav-link" to="/">Inicio</Link>
                <Link className="nav-link">Nosotros</Link>
                <Link className="nav-link">Productos</Link>
                <Link className="nav-link" to="/contacto">Contacto</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

        <Outlet/>

        <footer className="text-center p-3">Footer</footer>
    </>
  );
}

export default BasicExample;