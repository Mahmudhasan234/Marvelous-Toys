import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ShopByCategory = () => {
  const [currentData, setCurrentData] = useState([])
  const [category, setCategory] = useState('star-wars')

  useEffect(() => {
    fetch(`https://marvel-toys-server.vercel.app/alltoys?subCategory=${category}`)
      .then(res => res.json())
      .then(data => setCurrentData(data))
  }, [category])

  const handleDataByCategory = (parameter) => {
    setCategory(parameter)
  }

  return (
    <div className='mt-20  bg-base-100 p-5'>
      <div className='flex justify-center items-center'>
        <h1 className=' my-5 text-center text-xl lg:text-7xl font-bold'>Exclusive Hot Deals </h1>
        <img className='h-24' src="https://i.ibb.co/hFJ5kYf/pngtree-big-sale-best-offer-png-image-5376766-removebg-preview.png" alt="" />
      </div>
      <h1 className='mb-10 text-center text-sm mx-10 text-gray-500 lg:text-lg'>Discover our exclusive deals that bring joy to both kids and kids-at-heart!</h1>
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
                <div className="card card-side bg-base-100 shadow-2xl p-5 gap-5 mb-5 lg:mx-8">
                  <figure><img className='lg:h-24 h-16' src={data.picture} alt="Movie" /></figure>
                  <div className="card-body">
                    <h2 className="text-xl font-bold">{data.name}</h2>
                    <p className='text-lg font-semibold'>Price: ${data.price}</p>
                    <div className='flex gap-2'>
                      <Rating className='text-a'
                        style={{ maxWidth: 120 }}
                        value={Math.round(data.rating)}
                        readOnly
                      />{data.rating}
                    </div>
                    <div className="card-actions">
                      <button className="btn btn-warning text-white font-bold hover:bg-gradient-to-r from-yellow-500 to-pink-600">View Details</button>
                    </div>
                  </div>
                </div>)
            }
          </TabPanel>
          <TabPanel>
            {
              currentData.map(data =>
                <div className="card card-side bg-base-100 shadow-2xl p-5 gap-5 mb-5 lg:mx-8">
                  <figure><img className='lg:h-24 h-16' src={data.picture} alt="Movie" /></figure>
                  <div className="card-body">
                    <h2 className="text-xl font-bold">{data.name}</h2>
                    <p className='text-lg font-semibold'>Price: ${data.price}</p>
                    <div className='flex gap-2'>
                      <Rating className='text-a'
                        style={{ maxWidth: 120 }}
                        value={Math.round(data.rating)}
                        readOnly
                      />{data.rating}
                    </div>
                    <div className="card-actions">
                      <button className="btn btn-warning text-white font-bold hover:bg-gradient-to-r from-yellow-500 to-pink-600">View Details</button>
                    </div>
                  </div>
                </div>)
            }
          </TabPanel>
          <TabPanel>
            {
              currentData.map(data =>
                <div className="card card-side bg-base-100 shadow-2xl p-5 gap-5 mb-5 lg:mx-8">
                  <figure><img className='lg:h-24 h-16' src={data.picture} alt="Movie" /></figure>
                  <div className="card-body">
                    <h2 className="text-xl font-bold">{data.name}</h2>
                    <p className='text-lg font-semibold'>Price: ${data.price}</p>
                    <div className='flex gap-2'>
                      <Rating className='text-a'
                        style={{ maxWidth: 120 }}
                        value={Math.round(data.rating)}
                        readOnly
                      />{data.rating}
                    </div>
                    <div className="card-actions">
                      <button className="btn btn-warning text-white font-bold hover:bg-gradient-to-r from-yellow-500 to-pink-600">View Details</button>
                    </div>
                  </div>
                </div>)
            }
          </TabPanel>
          <TabPanel>
            <h2> {
              currentData.map(data =>
                <div className="card card-side bg-base-100 shadow-2xl p-5 gap-5 mb-5 lg:mx-8">
                  <figure><img className='lg:h-24 h-16' src={data.picture} alt="Movie" /></figure>
                  <div className="card-body">
                    <h2 className="text-xl font-bold">{data.name}</h2>
                    <p className='text-lg font-semibold'>Price: ${data.price}</p>
                    <div className='flex gap-2'>
                      <Rating className='text-a'
                        style={{ maxWidth: 120 }}
                        value={Math.round(data.rating)}
                        readOnly
                      />{data.rating}
                    </div>
                    <div className="card-actions">
                      <button className="btn btn-warning text-white font-bold hover:bg-gradient-to-r from-yellow-500 to-pink-600">View Details</button>
                    </div>
                  </div>
                </div>)
            }</h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
