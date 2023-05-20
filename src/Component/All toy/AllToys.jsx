import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../../SharedComponent/Navbar';
import IndividualToy from './IndividualToy';

const AllToys = () => {
    const allToys = useLoaderData()
const[search, setSearch] = useState('')
console.log(search)

    return (
        <div>
            <Navbar></Navbar>
            {/* parent div */}
            <div>
                {/* search section */}
                <div>
                    <div className="form-control  mt-52 mb-5 lg:my-24 mx-20 lg:mx-[450px]">
                        <div className="input-group">
                            <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="Search…" className="input input-bordered" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* table section */}
                <div className="overflow-x-auto  w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Toy Name</th>
                                <th>Seller Name</th>
                                <th>Universe</th>
                                <th>Rating</th>
                                <th>Price</th>
                                <th>Avvailable Quantity</th>
                                <th></th>
                            </tr>
                        </thead>

                        {
                            allToys.filter((toy)=>{
                                return search.toLowerCase() === '' ? toy: toy.name.toLowerCase().includes(sear)
                            }).slice(0,20).map(toy => <IndividualToy toy={toy}></IndividualToy>)
                            }




                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;