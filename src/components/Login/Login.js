import React, { useState } from 'react';
import './Login.css';
import google from '../../assets/images/google.png';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';
import { createUserWithEmailAndPassword } from '@firebase/auth';

const Login = () => {

    const { auth } = useAuth();

    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
            })
    }

    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div style={{ position: 'relative', top: '-70px' }} className='container'>
            <h1 className='title text-center'>Welcome back <br />to <span style={{ color: '#2596be' }}>Medisure</span></h1>
            <form className='login-form'>
                <p className='form-text'>Sign in your account below.</p>
                <div className="mb-3">
                    <input onBlur={handleEmail} type="email" className="form-control w-50 form-text" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                </div>
                <div className="mb-3">
                    <input onBlur={handlePassword} type="password" className="form-control w-50 form-text" id="exampleInputPassword1" placeholder='Password' />
                </div>
                <p className='form-text'>Forgot password?</p>
                <button style={{ color: 'white', backgroundColor: '#0e4050' }} type="submit" className="btn form-text mt-4">Submit</button>
                <p className='form-text mt-3'>Don't have an account? <span className='register-btn'><Link to='/registration' className='form-text'>Register</Link></span> </p>
                <p className='form-text'>or</p>

            </form>
            <div style={{ marginRight: '180px' }} className='text-center'>
                <button onClick={handleGoogleLogin} className='google-btn'> <img style={{ width: '20px' }} src={google} alt="" /> <span className='ms-1'>Continue with Google</span></button>
            </div>
        </div>
    );
};

export default Login;