import React from 'react';
import {FaPaperPlane, FaHeadphones, FaStar } from "react-icons/fa";
const ShippingAndService = () => {
    return (
        <div>
            <div className=" mx-5 mt-5  rounded-xl p-5 lg:flex bg-white shadow">
  
  <div className="stat">
    <div className="stat-figure shadow-xl text-success">
    <FaPaperPlane className='h-8 w-8'></FaPaperPlane>
    </div>
    <div className="stat-title">Free Shipping</div>
    <div className="stat-value text-success">Over $100</div>
    <div className="stat-desc">Delivery within a Week</div>
  </div>
  <hr />
  <div className="stat">
    <div className="stat-figure text-secondary">
      <FaHeadphones className='h-8 w-8'></FaHeadphones>
    </div>
    <div className="stat-title">Customer Service</div>
    <div className="stat-value text-secondary">24/7</div>
    <div className="stat-desc">Call toll free @ 123456789</div>
  </div>
  <hr />
  <div className="stat">
    <div className="stat-figure text-secondary">
      
    </div>
    <div className="stat-value">Top Rated</div>
    <div className="stat-title mt-2">online Toy Store</div>
    <div className='flex gap-2 mt-2 text-amber-500'>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
    </div>
  </div>
  
</div>
        </div>
    );
};

export default ShippingAndService;