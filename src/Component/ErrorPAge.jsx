import React, { useEffect } from 'react';

const ErrorPAge = () => {useEffect(()=>{
    document.title = '404 | Marvelous Toys';
    
})
    return (
        <div>
            <img className='w-full' src="https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7879.jpg?w=740&t=st=1684534954~exp=1684535554~hmac=57ad4a19fabf85a8b1f782f3ca2682fba895ac98c9471df5563500981d9d9619" alt="" />
        </div>
    );
};

export default ErrorPAge;