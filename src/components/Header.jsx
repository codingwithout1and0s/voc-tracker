import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ImStatsBars } from "react-icons/im";

const Header = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className='mb-5'>
                <Container>
                    <ImStatsBars style={{ color: 'blue', fontSize: '2rem' }} />
                    <Navbar.Brand href="/home" className='mx-5'>VOC Tracker</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/full-stats">Stats</Link></Nav.Link>
                        <Nav.Link><Link to="/full-comments">Comments</Link></Nav.Link>
                    </Nav>
                        <Navbar.Text className="justify-content-end">
                            <NavDropdown title="User" id="navbarScrollingDropdown" className='d-inline'>
                                <NavDropdown.Item href="#action3">
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Text>
                </Container>
            </Navbar>
        </>
    );
}

export default Header
