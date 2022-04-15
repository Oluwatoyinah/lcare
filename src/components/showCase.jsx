import React, { Component } from 'react';

const ShowCase = () => {
    return ( 
        <section className="container-fluid showcase py-5 my-md-5">
            <div className="container">
                <div className="row g-2">
                    <div className="col-md-4">
                        <img src="https://res.cloudinary.com/oluwatoyinah/image/upload/v1649450411/skincare/skin3_yvofno.jpg" style={{ width: "100%"}} alt="" />
                    </div>
                    <div className="col-md-4 mt-md-5">
                        <img src="https://res.cloudinary.com/oluwatoyinah/image/upload/v1649450411/skincare/skin2_katsni.jpg" style={{ width: "100%"}} alt="" />
                    </div>
                    <div className="col-md-4 mt-md-5 pt-md-5">
                        <img src="https://res.cloudinary.com/oluwatoyinah/image/upload/v1649519307/skincare/Aloe_Willowbark_Vitamin_C_Serum_hdoarz.jpg" style={{ width: "100%"}} alt="" />
                    </div>
                </div>
            </div>
        </section>
     );
}

export default ShowCase;