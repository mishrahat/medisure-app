import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img style={{ width: '190px', position: 'relative', top: '-10px' }} src={logo} alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav page">
                            <li className="nav-item page main-route">
                                <Link to='/home'>Home</Link>
                            </li>
                            <li className="nav-item page">
                                <Link to='/services'>Services</Link>
                            </li>
                            <li className="nav-item main-route">
                                <a style={{ color: '#0e4050' }} class="nav-link" href="/home#qna"><span className='q-a'>Question & Answers</span></a>
                            </li>
                            <li className="nav-item page main-route">
                                <Link to='/consultation'>Consultation</Link>
                            </li>
                            <li className="nav-item page main-route">
                                <Link to='/articles'>Articles</Link>
                            </li>
                            <li className="nav-item page other-btn">
                                <a href="tel:+8801813776268"><span style={{ color: '#2596be' }}>Call Now</span> <br />01813-776268</a>
                            </li>
                            <li className="nav-item page other-btn">
                                <Link to='/login'>Login</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;