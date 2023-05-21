import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Component/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    // console.log(user)

    const handleSignOut = () => {
        signOutUser()
            .then(result => console.log(result))
            .catch(error => console.error(error))
    }
    const navItems = <>
        <div className='lg:flex font-bold text-xl'>

            <li><Link to='/'>Home</Link></li>
            <li><Link to='/alltoys'>All Toys</Link></li>
            {
                user && <div className='lg:flex'>
                    <li><Link to='/mytoys'>My Toys</Link></li>
                    <li><Link to='/addtoys'>Add Toy</Link></li>
                </div>
            }
            <li><Link to='/blogs'>Blogs</Link></li>


        </div>
    </>


    const loginBtn = <>
        {
            user && user ? <div>
                {
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="m-1"><div className="tooltip" data-tip={user && user.displayName ? user.displayName : user.email}>
                            {user.photoURL ? <div><img className='rounded-full h-8 w-8' src={user.photoURL} alt="" /></div> : <FaUserCircle className='h-5 w-5'></FaUserCircle>}</div></label>
                        <ul tabIndex={0} className="dropdown-content menu shadow text-black bg-base-100 rounded-box p-10 ">
                            <li>{user.email}</li>
                            <button onClick={handleSignOut} className='mt-5 hover:btn-error p-2 rounded hover:font-bold hover:text-white'>Sign Out</button>
                        </ul>
                    </div>
                }
            </div> :

                <div className='p-3 rounded-lg border-0 bg-[#F3904F] hover:bg-gradient-to-r from-[#F3904F] to-[#ee0979] text-white text-xs lg:text-xl'>
                    <Link to='/login'>Become a Seller</Link>

                </div>
        }
    </>

    return (
        <div>
            {/* navbar start */}
            <div>
                <div className="navbar lg:mt-5 backdrop-blur-sm">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                                {navItems}
                                
                            </ul>
                        </div>
                        <Link to='/'> <img className='lg:h-24' src="https://i.ibb.co/XYGgYsY/MARVELOUS-removebg-preview.png" alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>

                    </div>
                    <div className='navbar-end'>
                        {
                            loginBtn
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;