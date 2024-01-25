import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ImStatsBars } from "react-icons/im";

const Header = () => {
    const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

    const logOut = (e) => {
        e.preventDefault();
        setIsLoggedIn(false);
        setAuthUser(null);
    }

    useEffect(() => {
        console.log("user: " + authUser);
    }, [])

    return (
        <>
            <Navbar id="navbar" bg="dark" data-bs-theme="dark">
                <Container>
                    <ImStatsBars style={{ color: 'blue', fontSize: '2rem' }} />
                    <Navbar.Brand href="/home" className='mx-5'>VOC Tracker</Navbar.Brand>
                    {isLoggedIn && <Nav className="me-auto">
                        <Nav.Link href="/full-comments">Comments</Nav.Link>
                    </Nav>
                    }
                    {isLoggedIn ?
                        <Navbar.Text className="justify-content-end">
                            <NavDropdown title={authUser} id="navbarScrollingDropdown" className='d-inline'>
                                <NavDropdown.Item onClick={(e) => logOut(e)}>
                                    Logout
                                </NavDropdown.Item> 
                            </NavDropdown>
                        </Navbar.Text>
                        :
                        <Navbar.Text className="justify-content-end">
                            <Link to="/login">Login</Link>
                            <br />
                            <Link to="/admin">Admin</Link>
                        </Navbar.Text>
                    }
                </Container>
            </Navbar>
        </>
    );
}

export default Header
