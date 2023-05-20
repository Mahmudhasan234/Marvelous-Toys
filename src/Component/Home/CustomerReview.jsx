import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUserCircle } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../Home/reviewStyle.css";

// import required modules
import { Pagination } from "swiper";
const CustomerReview = () => {
    return (
        <div>
            <h1 className='text-4xl text-center mt-16 mb-5 font-bold '>Marvelous Reviews of our Valuable client</h1>
            <div className="mx-8 ">
                <>
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper "
                    >
                        <SwiperSlide>
                            <div className="card shadow-2xl w-96  text-neutral-content bg-[url(https://img.freepik.com/free-vector/happy-young-couple-having-fun-girl-guy-dancing-party-celebrating-good-news-flat-illustration_74855-10820.jpg?w=740&t=st=1684576928~exp=1684577528~hmac=caffa9dfaf9f013f25f3104e9050b83998e7513a012165b5a62634caeeca64ba)] ">
                                <div className="card-body items-center text-center bg-gray-400 bg-opacity-10 rounded-2xl backdrop-blur-lg">
                                    <h2 className="text-black text-xl font-bold p-3">The Darth Vader TIE Advanced x1 figure is amazing! The transformation is seamless, and the attention to detail is impressive.</h2>
                                    <p className="text-xl font-bold text-yellow-600 mt-5 mb-5">John.</p>
                                    <div className="card-actions justify-center">
                                        <FaUserCircle className="h-10 w-10 text-black
                                        "></FaUserCircle>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>    
                            <div className="card shadow-2xl w-96  text-neutral-content bg-[url(https://img.freepik.com/free-vector/people-celebrating-together_23-2148399973.jpg?w=740&t=st=1684577294~exp=1684577894~hmac=7a764037beaa18809832f996170e50fe49d94df194a9821ed21270c7625a2028)] ">
                            <div className="card-body items-center text-center bg-gray-400 bg-opacity-10 rounded-2xl backdrop-blur-lg">
                                <h2 className="text-black text-xl font-bold p-3">! The figure captures the essence of Luke and the X-wing perfectly. The transformation is smooth, and the figure is highly poseable. Highly recommended!</h2>
                                <p className="text-xl font-bold text-orange-800 mb-5">Sarah.</p>
                                <div className="card-actions justify-center">
                                    <FaUserCircle className="h-10 w-10 text-black
                                        "></FaUserCircle>
                                </div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>     <div className="card shadow-2xl w-96  text-neutral-content bg-[url(https://img.freepik.com/free-vector/couple-meeting-after-separation-girl-guy-walking-each-other-with-open-arms-flat-vector-illustration-romance-dating-love_74855-8305.jpg?w=826&t=st=1684577347~exp=1684577947~hmac=abddb690c1f9ec39f390bdbd942e754a73f20df860beb000ea35350ff05c2375)] ">
                            <div className="card-body items-center text-center bg-gray-400 bg-opacity-10 rounded-xl backdrop-blur-lg">
                                <h2 className="text-black text-xl font-bold"> The figure's transformation is stunning, and the level of detail is remarkable. A great collectible for both Transformers and Star Wars enthusiasts!</h2>
                                <p className="text-xl font-bold text-orange-400 mt-5 mb-5">David</p>
                                <div className="card-actions justify-center">
                                    <FaUserCircle className="h-10 w-10 text-black
                                        "></FaUserCircle>
                                </div>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide>    <div className="card shadow-2xl w-96  text-neutral-content bg-[url(https://img.freepik.com/free-vector/doodle-lettering-happy-vector-calligraphy_53876-127484.jpg?w=740&t=st=1684577667~exp=1684578267~hmac=600c1ad780ae8f9bc5178ae3ecf315c26a0a3fed54571d0514881a9d2ab6ed6f)] ">
                            <div className="card-body items-center text-center bg-gray-400 bg-opacity-10 rounded-2xl backdrop-blur-lg"><h2 className="text-black text-xl font-bold"> The figures are well-made and offer an exciting crossover between two beloved universes. The attention to detail in both robot and vehicle modes is impressive. Highly satisfied with my purchase!</h2>
                                <p className="text-xl font-bold text-purple-800  mt-2 mb-2">Emily</p>
                                <div className="card-actions justify-center">
                                    <FaUserCircle className="h-10 w-10 text-black
                                        "></FaUserCircle>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>

                    </Swiper>
                </>
            </div>
        </div>
    );
};

export default CustomerReview;