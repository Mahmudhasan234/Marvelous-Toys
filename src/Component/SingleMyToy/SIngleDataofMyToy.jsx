import React from 'react';
import Swal from 'sweetalert2'
import { FaEdit, FaBan } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const SIngleDataofMyToy = ({ data,currentData, setCurrentData }) => {
    
    const { _id, picture, name, rating, subCategory, price, quantity } = data
    console.log(_id)

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/alltoys/${_id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {

                    {
                        const remaining = currentData.filter(data=> data._id !== _id)
                        setCurrentData(remaining)
                    }
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }                
                console.log(data)})
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
        
    }


    return (

        <tbody>

            <tr>
                <th>
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} />
                        </div>
                    </div>
                </th>
                <td>
                    <div className="flex items-center space-x-3">

                        <div>
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
                </td>
                <td>

                </td>
                <td><div className="font-bold">{subCategory}</div></td>
                <td>
                    <div className="font-bold">{rating}</div>
                </td>
                <td>
                    <div className="font-bold"><p>${price}</p></div>
                </td>
                <td>
                    <div className="font-bold"><p>{quantity}</p></div>
                </td>
                <th>
                    <div className='flex flex-col gap-5'>
                        <button ><Link to={`/updateadd/${_id}`}>
                            <FaEdit className='h-8 w-8'></FaEdit>
                            </Link>
                            </button>
                        <button onClick={() => { handleDelete(_id) }} ><FaBan className='h-8 w-8'></FaBan></button>
                    </div>
                </th>
            </tr>
            
        </tbody>

    );
};

export default SIngleDataofMyToy;