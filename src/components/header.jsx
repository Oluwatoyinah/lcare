import React, { Component } from 'react';

const Header = () => {
    return ( 
        <header className="container-fluid mh-100">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className='mx-auto' src="https://res.cloudinary.com/oluwatoyinah/image/upload/v1649448560/skincare/skin1_cxq3qk.jpg" alt="header image"/>
                    </div>

                    <div className="col-md-6 my-md-auto">
                        <h1>LuxCare</h1>
                        {/* <p>Elegance for every moment</p> */}
                    </div>
                </div>
            </div>
        </header>
     );
}

export default Header;