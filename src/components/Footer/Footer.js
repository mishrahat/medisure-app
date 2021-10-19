import React from 'react';
import logo from '../../assets/logo.png';
import playstore from '../../assets/images/playstore.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-lg-3">
                        <img className='w-75' src={logo} alt="" />
                        <p className='footer-info'>Talk with a doctor using our highly secured end-to-end encrypted.</p>
                        <div className='footer-buttons d-flex justify-content-center align-items-center'>
                            <button className='footer-btn'>
                                <div className='d-flex justify-content-center align-items-center content'>
                                    <i class="fab fa-apple"></i> <span className='btn-text'><span className='download-text'>Download on the</span> <br /> Apple Store</span>
                                </div></button>
                        </div>
                    </div>
                    <div style={{ marginTop: '120px' }} class="col-lg-3">
                        <p className='footer-info'>Ask a doctor online</p>
                        <p className='footer-info'>Chat with a doctor</p>
                        <p className='footer-info'>Phone a doctor</p>
                        <p className='footer-info'>Video consultation</p>
                        <p className='footer-info'>Online COVID-19 care</p>
                        <p className='footer-info'>Articles</p>
                        <p className='footer-info'>Answers</p>
                    </div>
                    <div style={{ marginTop: '120px' }} class="col-lg-3">
                        <p className='footer-info'>Tools</p>
                        <p className='footer-info'>FAQ</p>
                        <p className='footer-info'>Blogs</p>
                        <p className='footer-info'>Careers</p>
                        <p className='footer-info'>About us</p>
                        <p className='footer-info'>Terms</p>
                        <p className='footer-info'>Privacy</p>
                    </div>
                    <div style={{ marginTop: '120px' }} class="col-lg-3">
                        <p className='footer-info'>Get medisure app</p>
                        <p className='footer-info'>Get API</p>
                        <p className='footer-info'>Get widget</p>
                        <p className='footer-info'>Medical review team</p>
                        <p className='footer-info'>Deals & offers</p>
                        <p className='footer-info'>Support</p>
                        <p className='footer-info'>Help</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;