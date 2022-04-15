import React, { Component } from 'react';
import Header from './header';
import Products from './products';
import ShowCase from './showCase';
// import About from './about';
import Footer from './footer';

const Main = () => {
    return ( 
        <div>
            <Header />
            <ShowCase />
            <Products />
            <Footer />  
        </div> 
     );
}

export default Main;