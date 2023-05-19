import React from 'react';
import Banner from './Banner';
import SlidingGallery from './SlidingGallery';

const Home = () => {
    return (
        <div className='bg-base-300'>
            <Banner></Banner>
            <SlidingGallery></SlidingGallery>
            <h1>this is my home</h1>
        </div>
    );
};

export default Home;