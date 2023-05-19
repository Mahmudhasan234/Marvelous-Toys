import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../SharedComponent/Navbar';
const Registration = () => {
    return (
        <div className='bg-no-repeat bg-cover bg-[url(https://i.ibb.co/THmS552/7366082.jpg)] lg:h-[1000px] rounded '>
            <div className='max-w-7xl mx-auto'>
            {/* login form start */}
            <Navbar></Navbar>
                            <h1 className='text-2xl lg:text-5xl font-bold text-center lg:text-left text-black p-16'>Become a Seller</h1>
            <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse lg:w-2/3">
                        <div className="card flex lg:right-64 shadow-2xl w-full  backdrop-blur-xl">
                            <form >
                                <div className="card-body">

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text lg:text-2xl text-black">Name</span>
                                        </label>
                                        <input type="text" placeholder="email" name='name' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text lg:text-2xl text-black">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text lg:text-2xl text-black">Photo URL</span>
                                        </label>
                                        <input type="text" placeholder="email" name='photoURL' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text lg:text-2xl text-black">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" />
                                        <label className="label text-black">
                                            <p> Already a seller?
                                                <Link to='/login' className=" ml-2 link link-hover">PLease Login </Link>
                                            </p>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn border-0 btn-warning hover:bg-gradient-to-br from-yellow-400 to-pink-600 text-white">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;