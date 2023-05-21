import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Navbar from '../../../SharedComponent/Navbar';
import Swal from 'sweetalert2'
const UpdateContent = () => {
const navigate = useNavigate()
    const data = useLoaderData()
    const { _id, productName, price, quantity, description } = data
    console.log(price)


    const handleupdateDetails = (event) => {
        event.preventDefault()
        const form = event.target
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const newUpdate = { price, quantity, description }
console.log(newUpdate)
        fetch(`https://marvel-toys-server-mahmudhasan234.vercel.app/alltoys/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUpdate)
        })
            .then(res=>res.json())
            .then(data=>{console.log(data)
                if(data.modifiedCount>0){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Product Updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                navigate('/mytoys')
            })
            .catch(err=>{console.log(err.message)})
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className='text-4xl my-10 font-bold text-center'>Update details of {productName}</h1>
                <div>
                    <form onSubmit={handleupdateDetails}>
                        <div className='card-body'>
                            <div className="form-control lg:flex lg:flex-row lg:justify-around">
                                <div>
                                    <label className="label">
                                        <span className="label-text text-xl font-bold">Price</span>
                                    </label>
                                    <input type="text" placeholder="Enter Your product price" defaultValue={price} name='price' className="input input-bordered w-72 lg:w-96" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-xl font-bold">Available Quantity</span>
                                    </label>
                                    <input type="text" name='quantity' defaultValue={quantity} placeholder="Enter your Product Quantity" className="input input-bordered w-72 lg:w-96" />
                                </div>

                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-control lg:flex lg:flex-row justify-center">
                                <div>
                                    <label className="label">
                                        <span className="label-text text-xl font-bold">Product Description </span>
                                    </label>
                                    <input type="text" name='description' defaultValue={description} placeholder="Enter Your Product Description" className="input input-bordered w-72 lg:w-96" />
                                </div>
                                <div className="form-control lg:flex lg:flex-row lg:justify-around">

                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Your Product</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <h1></h1>
        </div>
    );
};

export default UpdateContent;