import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './index.css'

// import ProjectInfo from '../Project/projectsinfo.json'

function Header() {
    // const [data, setdata] = useState(ProjectInfo)

    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand >
    <Link to ="/" className= 'page-links' >Melissa Armand</Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link>
        <Link to ="/About" className='page-links' >About</Link>
      </Nav.Link>
      <Nav.Link href="">Resume</Nav.Link>
      <NavDropdown title="Contact" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://github.com/melissarmand">Github</NavDropdown.Item>
        <NavDropdown.Item href="https://www.linkedin.com/in/melissa-armand-4477858b/">Linked In</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item >Email: melissarmand@gmail.com</NavDropdown.Item>
        <NavDropdown.Item >Phone: 772-607-4665</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default Header