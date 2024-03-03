import React from 'react';

const Card = ({item}) => {
    const img = {src : 'Images/1.png'} 
    
    return (
        <div className="card h-100">
            <div className='d-flex justify-content-center'>
           <img src={img.src} alt="Dp image" width='100px' />
            </div>
            <div className='col-12 fw-bolder text-center'>
             Name : {item.name}
            </div>
            <div className='col-12 fw-bolder text-center'>
             Batch Id : {item.empid}
            </div>
            <div className='col-12 fw-bolder text-center'>
            Mail : {item.mail}
            </div>
            <div className='col-12 fw-bolder text-center'>
            Phone : {item.phone}
            </div>
            <div className='col-12 fw-bolder text-center'>
            Address : {item.address}
            </div>
         
             
             
        </div>
    );
};

export default Card;