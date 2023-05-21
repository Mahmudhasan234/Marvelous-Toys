import React from 'react';
import { Link } from 'react-router-dom';

const SIngleDataofMyToy = ({data}) => {
    const { _id, picture, name, rating, subCategory, price, quantity } = data
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
                    <button className='btn btn-warning text-white hover:bg-gradient-to-r from-amber-400 to-pink-600'><Link to={`/toydetails/${_id}`}>View Deatils</Link></button>
                </th>
            </tr>
        </tbody>
        
    );
};

export default SIngleDataofMyToy;