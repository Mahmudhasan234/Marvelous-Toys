import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../SharedComponent/Navbar';

const Login = () => {
    return (
        <div className='bg-no-repeat f bg-cover bg-[url(https://img.freepik.com/free-psd/delivery-3d-illustration-with-person-house-entrance-showing-thumbs-up_23-2149449432.jpg?w=826&t=st=1684495117~exp=1684495717~hmac=213ebfaec3705ae379bdb1ef90ce05d9ce7ffd24a7868b25f074eb77caf787aa)] h-screen rounded'>
            {/* login form start */}
            <Navbar></Navbar>
            <div className="hero lg:h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className='lg:relative lg:ml-5 text-center left-3/4 bottom-64'>
                            <h1 className='text-2xl lg:text-5xl font-bold text-center text-white lg:text-black'>Please Login</h1>
                        </div>
                        <div className="card flex lg:left-64 lg:w-96 lg:h-96 shadow-2xl backdrop-blur-xl">
                            <form>
                                <div className="card-body">

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text lg:text-2xl text-white lg:text-black">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text lg:text-2xl text-white lg:text-black">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" />
                                        <label className="label text-white lg:text-black">
                                            <p> Want to
                                                <Link to='/registration' className=" ml-2 link link-hover">Become a Seller</Link>
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
    );
};

export default Login;