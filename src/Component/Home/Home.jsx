import React from 'react';
import Banner from './Banner';
import SlidingGallery from './SlidingGallery';
import CustomerReview from './CustomerReview';
import ShippingAndService from './ShippingAndService';
import ShopByCategory from './ShopByCategory';
import Navbar from '../../SharedComponent/Navbar';

const Home = () => {
    return (
        <div className='bg-base-300'>
            <Navbar></Navbar>
            {/* <Banner></Banner> */}
            <ShopByCategory></ShopByCategory>
            <ShippingAndService></ShippingAndService>
            <CustomerReview></CustomerReview>
            <SlidingGallery></SlidingGallery>
            <h1>this is my home</h1>
        </div>
    );
};

export default Home;