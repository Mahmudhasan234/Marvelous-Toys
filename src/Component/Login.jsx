import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../SharedComponent/Navbar';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";
const Login = () => {
    const {signInWithEmail, signInWithGoogle}= useContext(AuthContext)
    const handleSignInWithgoogle = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User login Successfully',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
            .catch(error => { console.log(error.message) });
    }
const handleSignIn =(event) => {
    event.preventDefault();
        const form = event.target
        const password = form.password.value;
        const email = form.email.value;
        console.log(email,password)
        signInWithEmail(email,password)
        .then(result => Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'User login Successfully',
            showConfirmButton: false,
            timer: 2000
        }))
        .catch(error=>console.log(error.message))
}



    return (
        <div className='bg-no-repeat f bg-cover bg-[url(https://i.ibb.co/r6fxXZ8/7351289.jpg)] rounded'>
            {/* login form start */}
            <Navbar></Navbar>
            <div className="hero lg:h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className='lg:relative lg:ml-5 text-center left-3/4 bottom-64'>
                            <h1 className='text-2xl lg:text-5xl font-bold text-center text-white lg:text-black'>Please Login</h1>
                        </div>
                        <div className="card flex lg:left-64 lg:w-96 lg:h-96 shadow-2xl backdrop-blur-xl">
                            <form onSubmit={handleSignIn}>
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
                                        <input type="password" placeholder="password" 
                                        name ='password'
                                        className="input input-bordered" />
                                        <label className="label text-white lg:text-black">
                                            <p> Want to
                                                <Link to='/registration' className=" ml-2 link link-hover">Become a Seller</Link>
                                            </p>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                    <div className="flex flex-col w-full border-opacity-50">
                                    <div className="grid h-20 card rounded-box"><button className="btn btn-error text-white hover:bg-red-500" >Login</button></div>
                                    <div className="divider">OR</div>
                                    <div className="grid h-20 card rounded-box "> <div onClick={handleSignInWithgoogle} className='mt-5 text-center btn btn-outline gap-2'><FcGoogle className='h-5 w-5' ></FcGoogle> <Link>Sigin  with google</Link></div></div>
                                </div>
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