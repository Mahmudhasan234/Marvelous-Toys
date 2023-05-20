import React from 'react';
import Banner from './Banner';
import SlidingGallery from './SlidingGallery';
import CustomerReview from './CustomerReview';
import ShippingAndService from './ShippingAndService';

const Home = () => {
    return (
        <div className='bg-base-300'>
            <Banner></Banner>
            <ShippingAndService></ShippingAndService>
            <SlidingGallery></SlidingGallery>
            <CustomerReview></CustomerReview>
            <h1>this is my home</h1>
        </div>
    );
};

export default Home;