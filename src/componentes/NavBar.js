import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './cart/CartWidget';
import CartIcon from './cart/CartWidget';
import { Link } from 'react-router-dom';

function BarraNav() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/quienes-somos">Quienes somos</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                    <li>
                        <Link to="/sucursales">Sucursales</Link>
                    </li>
                </ul>
            </Nav>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="PRODUCTOS" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Marroquineria</NavDropdown.Item>


                            <NavDropdown.Item href="#action/3.2"> Bijouterie </NavDropdown.Item>

                            <NavDropdown.Item href="#action/3.3">Equipajes</NavDropdown.Item>

                            <NavDropdown.Item href="#action/3.4">Calzado</NavDropdown.Item>

                            <NavDropdown.Item href='#action/3.5'>Accesorios</NavDropdown.Item>

                        </NavDropdown>

                    </Nav>
                    <Nav>
                        <a className='nav_link' href='a'><CartWidget /> </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BarraNav;