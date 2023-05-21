import React from 'react';
import Navbar from '../../SharedComponent/Navbar';

const Banner = () => {
    return (
        <div>
            <div className="hero  lg:h-screen rounded bg-[url(https://img.freepik.com/free-photo/happy-child-raises-arm-near-paper-carton-toy-rocket-wants-fly-into-space_273609-30378.jpg?w=826&t=st=1684454664~exp=1684455264~hmac=1e16c11d95dbe6208d3d122797569441cfb1da083bff02a8e8accf40fbb94966)]">
                <div className="bg-gradient-to-r h-full from-[#151515] to-[rgba(21, 21, 21, 0)] bg-opacity-30 rounded">
            <div className='text-white'>
            <div className='lg:max-w-7xl lg:mx-auto'>
            <Navbar></Navbar>
            </div>
            </div >
                    <div className="rounded-xl flex flex-col justify-center items-start lg:p-20 p-8 h-full left-0 top-0 text-white">
                        <div>
                        <h1 className="mb-5 lg:text-5xl text-2xl font-bold tracking-wide  text-transparent bg-clip-text bg-gradient-to-r from-[#F3904F] to-[#ee0979]"> Best Action Figures <br /> <span>
                            for Your Kiddos!!
                        </span>
                        </h1>
                        <p className="lg:mb-5 lg:mr-96 text-sm lg:text-xl text-gray-200">Welcome to our action figure store, where your imagination takes center stage and epic adventures await! Step into a realm where heroes and villains collide, where iconic characters from your favorite franchises spring to life.</p>
                        <button className="btn text-white font-bold mt-5  mb-5 bg-gradient-to-r from-[#F3904F] to-[#ee0979]">Browse Toys</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;