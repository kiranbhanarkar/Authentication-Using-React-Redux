import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import './index.css'

const NavbarComponent = () => {
  return (
    
    <Navbar  variant="dark" style={{backgroundColor: "black", borderBottom: '1.5px solid white'}}>
    <Container>
      <Navbar.Brand as={NavLink} to="/">Header</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link as={NavLink} to="/">SignUp</Nav.Link>
          <Nav.Link as={NavLink} to="/Profile">Profile</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
    
  </Navbar>
  
  )
}

export default NavbarComponent