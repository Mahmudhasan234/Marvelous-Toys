import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navItems = <>
    <div className='lg:flex font-bold text-xl'>
        
    <li><Link>Home</Link></li>
        <li><Link>All Toys</Link></li>
        <li><Link>My Toys</Link></li>
        <li><Link>Add Toy</Link></li>
        <li><Link>Blogs</Link></li>

    </div>
    </>


    const loginBtn = <>
        <div className='p-3 rounded-lg border-0 bg-[#F3904F] hover:bg-gradient-to-r from-[#F3904F] to-[#ee0979] text-white text-xs lg:text-xl'>
            <Link to='/login'>Become a Seller</Link>

        </div>
    </>

    return (
        <div>
            {/* navbar start */}
            <div>
                <div className="navbar lg:mt-5">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                                {navItems}
                            </ul>
                        </div>
                        <Link> <img className='lg:h-24' src="https://i.ibb.co/XYGgYsY/MARVELOUS-removebg-preview.png" alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>

                    </div>
                    <div className='navbar-end'>
                        {loginBtn}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;