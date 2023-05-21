import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import Navbar from '../SharedComponent/Navbar';
import SIngleDataofMyToy from './SingleMyToy/SIngleDataofMyToy';

const MyToys = () => {
    useEffect(()=>{
        document.title = 'My Toys | Marvelous Toys';
    })
    const [currentData, setCurrentData] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://marvel-toys-server-mahmudhasan234.vercel.app/alltoys?email=${user.email}`)
            .then(res => res.json())
            .then(data => setCurrentData(data))
    }, [])
    return (
        <div>
            <Navbar></Navbar>

            <div>
                <h1 className='text-5xl font-bold text-center my-5'>Toys Uploaded by {user && user.displayName ? user.displayName : 'you'}.</h1>
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
                            currentData.map(data => <SIngleDataofMyToy key={data._id}
                                data={data}
                                currentData={currentData}
                                setCurrentData={setCurrentData}></SIngleDataofMyToy>)
                        }



                    </table>
                </div>


            </div>

        </div>
    );
};

export default MyToys;