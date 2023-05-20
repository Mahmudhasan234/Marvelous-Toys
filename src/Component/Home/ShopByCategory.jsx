import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ShopByCategory = () => {
    const [currentData, setCurrentData] = useState([])
    const [category, setCategory] = useState(['star-wars'])
    const handleDataByCategory = (params) => {
        setCategory(params)
    }
    console.log(typeof category)
    const url = `https://marvel-toys-server.vercel.app/alltoys?subCategory=${category}`
    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setCurrentData(data))
    }, [])
    console.log(currentData)

    return (
        <div className='mt-20  bg-base-100 p-5'>

            <h1 className=' my-5 text-center text-xl lg:text-7xl font-bold'>Hot Deals </h1>
            <img src="https://i.ibb.co/hFJ5kYf/pngtree-big-sale-best-offer-png-image-5376766-removebg-preview.png" alt="" /> 
            <Tabs className='lg:mx-10'>
                <TabList>
                    <Tab onClick={() => handleDataByCategory('star-wars')}>Star Wars</Tab>
                    <Tab onClick={() => handleDataByCategory('marvel-universe')}>Marvel Super Heros</Tab>
                    <Tab onClick={() => handleDataByCategory('dc-universe')}>Dc Super Heros</Tab>
                    <Tab onClick={() => handleDataByCategory('transformers-universe')}>TransFormers</Tab>

                </TabList>

                <div >
                    <TabPanel>
                        {
                            currentData.map(data =>
                                <div className="card card-side bg-base-100 shadow-2xl p-5 gap-5 mb-5">
                                    <figure><img className='lg:h-24 h-16' src={data.picture} alt="Movie" /></figure>
                                    <div className="card-body">
                                        <h2 className="text-lg">{data.name}</h2>
                                        <p>Click the button to watch on Jetflix app.</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Watch</button>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;