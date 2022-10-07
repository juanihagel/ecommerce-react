import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './cart/CartWidget';
import CartIcon from './cart/CartWidget';


function BarraNav() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="PRODUCTOS" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Buzos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Remeras
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Conjuntos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Todos los productos</NavDropdown.Item>
                        </NavDropdown>
                       
                    </Nav>
                    <Nav>
                        <a className='nav_link' href='a'><CartWidget/> </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BarraNav;