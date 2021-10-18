import React, { useEffect, useState } from 'react';
import doctor from '../../assets/images/doctor.png';
import icon from '../../assets/images/circle-solid.svg';
import './Home.css';
import { Link } from 'react-router-dom';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const allServices = services.slice(0, 6);
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6">
                    <h1 className='title'>Consult a doctor anytime, anywhere by <u style={{ color: '#2596be' }}>video-call</u></h1>
                    <p className='info'>Talk with a doctor using our highly secured HIPAA complaint <br /> end-to-end encrypted video call.</p>
                    <br />
                    <div className='d-flex'>
                        <Link to='/consultation'><button className='common-btn'>Ask A Doctor Online</button></Link>
                        <p className='info chat'>Unlimited Chat</p>
                    </div>
                </div>
                <div className="col-lg-6 doctor-info">
                    <h4 style={{ position: 'relative', top: '30px', fontFamily: 'Poppins', color: '#0e4050' }}> <img className="filter-green" style={{ width: '10px', marginRight: '10px' }} src={icon} alt="" /> 2120 Doctors Online</h4>
                    <img className='doctor-banner' src={doctor} alt="" />
                </div>
            </div>
            <h2 className='basic-title'>Why you should trust us? <br /> Get to know about us</h2>

            <div className='cards mt-4'>
                {
                    allServices.map(service => <HomeServices
                        key={service.key}
                        service={service}
                    ></HomeServices>)
                }
            </div>
        </div>
    );
};

export default Home;