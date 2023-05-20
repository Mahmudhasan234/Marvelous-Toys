import React, { useState } from 'react';
import Navbar from '../SharedComponent/Navbar';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const AddToy = () => {
    const [ratings, setRating] = useState(0);
    const [value, setValue] = useState('');
    const handleSelect = event => {
        setValue(event.target.value)
    }
    const options = [
        { label: "Star Wars", value: "Star-Wars" },
        { label: "Marvel Comics", value: 'marvel-universe' },
        { label: "DC comics", value: "dc-universe" },
        { label: "Transformers", value: "transformers-universe" },
    ]

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target
        const name = form.username.value;
        const email = form.email.value;
        const picture = form.photoURL.value;
        const productName = form.productname.value;
        const price = form.price.value;
        const subCategory = value
        const rating= ratings
        const description = form.description.value;
        console.log(rating);
    }


    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div>
                <h1 className='text-5xl text-center font-bold my-5'>Add Items </h1>
            </div>
            <div>
                <form onSubmit={handleAddProduct}>
                    <div className="card-body">
                        <div className="form-control lg:flex lg:flex-row lg:justify-around">
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl font-bold">User Name</span>
                                </label>
                                <input type="text" placeholder="Enter Your Name" name='username' className="input input-bordered w-72 lg:w-96" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Enter Your Email" className="input input-bordered w-72 lg:w-96" />
                            </div>
                        </div>
                        <div className="form-control lg:flex lg:flex-row lg:justify-around">
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="Upload your product photo link" className="input input-bordered w-72 lg:w-96" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Select Category</span>
                                </label>
                                <select className="select w-72 lg:w-96" onChange={handleSelect}>
                                    <option disabled selected>Select Universe</option>
                                    {
                                        options.map(option => (<option value={option.value}>{option.label}</option>))
                                    }

                                </select>
                            </div>
                        </div>
                        <div className="form-control lg:flex lg:flex-row lg:justify-around">
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Product Name</span>
                                </label>
                                <input type="text" name='productname' placeholder="Enter Your Product Name" className="input input-bordered w-72 lg:w-96" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Rating</span>
                                </label>
                                <div className='w-96'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={ratings}
                                        onChange={setRating}
                                        isRequired
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-control lg:flex lg:flex-row lg:justify-around">
                            <div>
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Price</span>
                                </label>
                                <input type="text" name='price' placeholder="Enter Your Product Price" className="input input-bordered w-72 lg:w-96" />
                            </div>
                            <div className="form-control lg:flex lg:flex-row lg:justify-around">
                                <div>
                                    <label className="label">
                                        <span className="label-text text-xl font-bold">Product Description</span>
                                    </label>
                                    <input type="text" name='description' placeholder="Enter Your Product Description" className="input input-bordered w-72 lg:w-96" />
                                </div>
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;