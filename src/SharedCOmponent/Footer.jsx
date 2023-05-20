import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            {/* footer start */}
            <div className='bg-no-repeat bg-cover  bg-[url(https://img.freepik.com/free-psd/maternity-baby-shower-background_23-2150237231.jpg?w=826&t=st=1684451788~exp=1684452388~hmac=9624e23d580e11548d4dce3c3540c9edc47e817bd7b69f7132c5cf9a9266235a)] rounded-lg'>
                <footer className="footer p-10 backdrop-blur-md  font-bold rounded-lg">
                    <div >
                    <Link to='/'> <img className='lg:h-24' src="https://i.ibb.co/XYGgYsY/MARVELOUS-removebg-preview.png" alt="" /></Link>
                    </div>
                    <div>
                        <span className="mb-5">Services</span>
                        
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="mb-5 ">Company</span>
                        <a className="link link-hover">About us</a>
                       
                    </div>
                    <div>
                        <span className="mb-5">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                    <div>
                        <span className="mb-5">Newsletter</span>
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;