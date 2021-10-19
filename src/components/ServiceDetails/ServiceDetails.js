import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { servicename } = useParams();
    const [treatment, setTreatment] = useState([])
    useEffect(() => {
        const url = `./services.json/${servicename}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTreatment(data));
    }, []);


    return (
        <div>
            <h2 className='title text-center'> Welcome to <span style={{ color: '#2596be' }}>{servicename}</span> services!</h2>
            <p className='text-center'>Here you'll get the best services for your family and loved ones. Don't miss out the chance. Take care of you and your family.</p>
        </div>
    );
};

export default ServiceDetails;