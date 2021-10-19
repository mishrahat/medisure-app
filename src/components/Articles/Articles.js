import React from 'react';

const Articles = () => {
    return (
        <div className='container articles'>
            <div className='row'>
                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' }} className='col-lg-4'>
                    <h1 style={{ fontFamily: 'Poppins' }}>Medicine Treatment</h1>
                    <p style={{ fontFamily: 'Poppins' }}>Medicine treatment is a very important thing. It is used to get well soon....</p>
                    <button style={{ fontFamily: 'Poppins', border: 'none', backgroundColor: '#0e4050', color: 'white', padding: '9px' }}>Read Full Article</button>
                </div>
                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' }} className='col-lg-4'>
                    <h1 style={{ fontFamily: 'Poppins' }}>Heart Treatment</h1>
                    <p style={{ fontFamily: 'Poppins' }}>Heart treatment is a very important thing. It is used to get well soon....</p>
                    <button style={{ fontFamily: 'Poppins', border: 'none', backgroundColor: '#0e4050', color: 'white', padding: '9px' }}>Read Full Article</button>
                </div>
                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', padding: '10px' }} className='col-lg-4'>
                    <h1 style={{ fontFamily: 'Poppins' }}>Kidney Treatment</h1>
                    <p style={{ fontFamily: 'Poppins' }}>Kidney treatment is a very important thing. It is used to get well soon....</p>
                    <button style={{ fontFamily: 'Poppins', border: 'none', backgroundColor: '#0e4050', color: 'white', padding: '9px' }}>Read Full Article</button>
                </div>
            </div>
        </div>
    );
};

export default Articles;