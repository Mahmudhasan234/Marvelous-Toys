import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../SharedComponent/Navbar';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';

const Registration = () => {

    const { signUpUser, signInWithGoogle, user } = useContext(AuthContext)
    const navigate = useNavigate()
    /*Signup With Email*/
    const handleSignUpUser = event => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        console.log(email, password, name, photoURL);
        if ((password.length < 6)) {

            Swal.fire({
                icon: 'error',
                text: 'Password must be at least 6 characters',

            })
            return form.reset()
        }
        signUpUser(email, password, name, photoURL)
            .then(result => {
                const loggedInUser = result.user;
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 2000
                })
                updateUserProfileDetails(result.user, name, photoURL)
                console.log(loggedInUser)
            })
            .catch(error => { console.log(error.message) });

        const updateUserProfileDetails = (user, name, photoURL) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photoURL
            })

                .then()
                .catch(error => { console.log(error.message) })
        }
    }
    /*Signin with google*/

    const handleSignInWithgoogle = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User is Successfully Created',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
            .catch(error => { console.log(error.message) });
    }


    return (
        <div className='bg-no-repeat bg-cover bg-[url(https://i.ibb.co/THmS552/7366082.jpg)] lg:h-[1000px] rounded '>
            <div className='max-w-7xl mx-auto'>
                {/* login form start */}
                <Navbar></Navbar>
                <h1 className='text-2xl lg:text-5xl font-bold text-center lg:text-left text-black p-16'>Become a Seller</h1>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse lg:w-2/3">
                        <div className="card flex lg:right-64 shadow-2xl w-full  backdrop-blur-xl">
                            <form onSubmit={handleSignUpUser} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter your Name" name='name' required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email</span>
                                    </label>
                                    <input type="text" placeholder="Enter your email" name='email' required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Enter your email" name='photoURL' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" required className="input input-bordered" />
                                    <label className="label">
                                        <p>Already have an account? <Link to='/login' className="link link-hover "> Login.</Link></p>
                                    </label>
                                </div>
                                <div className="flex flex-col w-full border-opacity-50">
                                    <div className="grid h-20 card rounded-box"><button className="btn btn-error text-white hover:bg-red-500" >Register</button></div>
                                    <div className="divider">OR</div>
                                    <div className="grid h-20 card rounded-box "> <div onClick={handleSignInWithgoogle} className='mt-5 text-center btn btn-outline gap-2'><FcGoogle className='h-5 w-5' ></FcGoogle> <Link>Sigin  with google</Link></div></div>
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