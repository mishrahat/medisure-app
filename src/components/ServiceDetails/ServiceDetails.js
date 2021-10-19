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
            <h2>Details is Here! {servicename}</h2>
        </div>
    );
};

export default ServiceDetails;