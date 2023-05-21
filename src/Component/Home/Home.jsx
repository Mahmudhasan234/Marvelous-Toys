import React, { useEffect } from 'react';
import Banner from './Banner';
import SlidingGallery from './SlidingGallery';
import CustomerReview from './CustomerReview';
import ShippingAndService from './ShippingAndService';
import ShopByCategory from './ShopByCategory';
import Navbar from '../../SharedComponent/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'
const Home = () => {
    useEffect(()=>{
        document.title = 'Home | Marvelous Toys';
        AOS.init({duration: 3000});
    })
    return (
        <div className='bg-base-300'>
       <div data-aos="fade-down"><Banner></Banner></div>
            <div data-aos="fade-up">
            <ShopByCategory></ShopByCategory>
            </div>
            <div data-aos-="fade-left"><ShippingAndService></ShippingAndService></div>
            <div data-aos="fade-right">
            <CustomerReview></CustomerReview>
            </div>
           <div data-aos=" fade-right"> <SlidingGallery></SlidingGallery></div>
            
        </div>
    );
};

export default Home;