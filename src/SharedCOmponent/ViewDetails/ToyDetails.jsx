import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../Navbar';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToyDetails = () => {
    const toydata = useLoaderData()
    console.log(toydata);

    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div>
                <div className="lg:flex bg-base-100 shadow-xl">
                    <figure><img className='lg:h-screen lg:w-screen p-5' src={toydata[0].picture} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="text-4xl lg:text-6xl font-bold">{toydata[0].name}</h2>

                        <div className='flex gap-2 mt-3'>
                            <Rating
                                style={{ maxWidth: 120 }}
                                value={Math.round(toydata[0].rating)}
                                readOnly
                            />{toydata[0].rating}
                        </div>
                        <p className='text-lg font-semibold'>Price: ${toydata[0].price}</p>
                        <p className='text-lg font-semibold'>Movie Universe: {toydata[0].subCategory}</p>
                        <p className='text-xl mt-5 font-bold'>Product Details
                        </p>
                        <p className='text-lg text-gray-600 font-semibold'>{toydata[0].description}
                        </p>
                        <div className="card-actions mt-5 mb-5">
                            <button className="btn btn-warning text-white font-bold"><Link to='/'>Buy Now</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;