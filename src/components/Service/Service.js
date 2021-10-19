import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, img, description } = props.service;
    const url = `/homeservices/${name}`;
    return (
        <div className='card p-4'>
            <img src={img} className="card-img-top" alt="" />
            <div className='p-3'>
                <h4 style={{ fontFamily: 'Poppins', color: '#0e4050' }}>{name}</h4>
                <p style={{ fontFamily: 'Poppins' }}>{description}</p>
                <Link to={url}><button className='detail-btn'>For Details</button></Link>
            </div>
        </div>
    );
};

export default Service;