import { Container, Nav, Navbar } from 'react-bootstrap';
import { ImStatsBars } from "react-icons/im";

const Header = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className='mb-5'>
                <Container>
                    <ImStatsBars style={{ color: 'blue', fontSize: '2rem' }} />
                    <Navbar.Brand href="#home" className='mx-2'>VOC Tracker</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#stats">Stats</Nav.Link>
                        <Nav.Link href="#comments">Comments</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header
