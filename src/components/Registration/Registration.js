import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
    return (
        <div style={{ position: 'relative', top: '-70px' }} className='container'>
            <h1 className='title text-center'>Create your<br />account</h1>
            <form className='login-form'>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <input type="text" className="form-text form-control w-50" id="inputEmail3" placeholder='Full Name' />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <input type="email" className="form-text form-control w-50" id="inputEmail3" placeholder='Work Email' />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <input type="password" className="form-text form-control w-50" id="inputPassword3" placeholder='Passoword' />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10">
                        <input type="password" className="form-text form-control w-50" id="inputPassword3" placeholder='Confirm Passoword' />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div style={{ position: 'relative', right: '150px' }} className="form-check">
                            <input className="form-text form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-text form-check-label" for="gridCheck1">
                                By clicking 'Register' you agree to Medisure Terms and Privacy Policy.
                            </label>
                        </div>
                    </div>
                </div>
            </form>
            <button style={{ color: 'white', backgroundColor: '#0e4050', marginLeft: '450px' }} type="submit" className="btn form-text mt-4">Registration</button>
            <p style={{ marginLeft: '450px' }} className='form-text mt-3'>Already have an account? <span className='register-btn'><Link to='/login' className='form-text'>Login</Link></span> </p>
        </div>
    );
};

export default Registration;