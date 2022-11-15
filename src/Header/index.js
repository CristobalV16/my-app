import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


import { Link } from 'react-router-dom';

function Explorador() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">KRUOI</Navbar.Brand>
          <Nav className="me-auto">
            <header>
              <ul>
                <li>
                  <Link to="/" className='colorhover'>Inicio</Link>
                </li>
                <li>
                  <Link to="/torneos" className='colorhover'>Torneos</Link>
                </li>
                <li>
                  <Link to="/pc" className='colorhover'>PC'S</Link>
                </li>
                <li>
                  <Link to="/clientes" className='colorhover'>Clientes</Link>
                </li>
              </ul>
            </header>
          </Nav>
          <Button variant="success">Login</Button>{' '}
          <Button variant="danger">Registrarse</Button>{' '}
        </Container>
      </Navbar>
    </>
  );
}

export default Explorador;