import { useRef, useState, useEffect } from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'
const LOGIN_URL = '/auth';
import { Form, Button } from 'react-bootstrap'

const LoginPage = () => {

    const { setAuthUser, setIsLoggedIn } = useAuth();

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, password])


    const navigate = useNavigate();

    const logIn = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({user, password}),
            {
                headers: { 'Content-Type': 'application/json'},
                withCredentials: true
            });
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setSuccess(true);
            setUser('');
            setPassword('');
            setIsLoggedIn(true);
            setAuthUser({
                Name: 'Kevin'
            });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status ===  400) {
                setErrMsg('Missing Username of Password');
            } else if (err.response?.status === 400) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }

        // if(authUser != null){
        //     navigate("/home");
        // }
    }

    const background = 'https://images.pexels.com/photos/2451566/pexels-photo-2451566.jpeg?auto=compress&cs=tinysrgb&w=1920'

    return (
        <section 
            id="login"
            className='p-5 d-flex flex-column justify-content-center text-white' 
            style={{  
                backgroundImage: `url(${background})`, 
                backgroundSize: 'cover',
                marginTop: '-11vh',
                height: '100vh'
            }}
        >
            <h1 className='text-center text-white main-title'>
                VOC Tracker
            </h1>

            <Form onSubmit={(e) => logIn(e)} className='p-5'>
                <p className='text-center'>LOGIN</p>

                {/* Error Msgs*/}
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>{errMsg}</p> 

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label htmlFor='email'>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        id="email" 
                        ref={userRef}
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        autoComplete='off'
                        placeholder="Enter email" />
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Control 
                        type="password"
                        id="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Password" />
                </Form.Group>
                <Button variant="light" type="button">
                Forgot Password
                </Button>
                <Button variant="primary" type="submit"  className='mx-5'>
                Submit
                </Button>
            </Form>
        </section>
    )
}

export default LoginPage
