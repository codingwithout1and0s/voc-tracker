import { useAuth } from '../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const LoginPage = () => {

    const { authUser, setAuthUser, setIsLoggedIn } = useAuth();

    const navigate = useNavigate();

    const logIn = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        setAuthUser({
            Name: 'Kevin'
        });

        // if(authUser != null){
        //     navigate("/home");
        // }
    }

    const logOut = (e) => {
        e.preventDefault();
        setIsLoggedIn(false);
        setAuthUser(null);
    }

    // const submitHandler = () => {
    //     logIn();
    // }

    const background = 'https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=1920'

    return (
        <div className='p-5 border border-1 d-flex flex-column justify-content-center text-white' style={{  
            backgroundImage: `url(${background})`, 
            backgroundSize: 'cover',
            marginTop: '-50px',
            height: '50vw'
        }}>
            <h1 className='text-center text-white'>VOC Tracker</h1>
            <Form onSubmit={(e) => logIn(e)} className='p-5' style={{ maxWidth: '450px', backgroundColor: 'rgba(0,0,0,0.5', margin: 'auto'}}>
                <p className='text-center'>LOGIN</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="light" type="button">
                Forgot Password
                </Button>
                <Button variant="primary" type="submit"  className='mx-5'>
                Submit
                </Button>
            </Form>
        </div>
    )
}

export default LoginPage
