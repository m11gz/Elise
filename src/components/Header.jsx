import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../css/Header.css';




function NavScrollExample(props) {
  return (
    <Navbar className='header-navbar' expand="lg">
      <Container fluid>
        <Navbar.Brand className='company-logo' href="#">Elíse</Navbar.Brand>
        <Navbar />
        <Nav
          className="me-auto my-2 my-lg-0 hero-nav">
          <Nav.Link className='hero-combo' href="#action1">All Natural SkinCare for all</Nav.Link>
          <Nav.Link className='hero-menu' href="#action2">Menu</Nav.Link>
        </Nav>
        <Nav>

          <Nav.Link className='hero-login' href="#action1">Login</Nav.Link>
          <Nav.Link className='hero-cart' href="#action1"><i className='fa-sharp fa-solid fa-cart-shopping'></i></Nav.Link>


          <Nav.Link href="#action1" style={{ color: 'yellow' }} onClick={props.showSignin}>Login</Nav.Link>
          <Nav.Link style={{ color: 'yellow' }} onClick={props.showCart}>Cart 🛒</Nav.Link>

        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
