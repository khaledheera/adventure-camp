import React from 'react';

const ClassesCard = ({popularClass}) => {
    const { image,popularClasses,students} = popularClass;
    return (
        <div className='card lg:w-96 glass px-4 py-5 mx-auto  md:px-24 lg:px-10'>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src={image}
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          {popularClasses}
          </p>
          
          <p><span className='font-bold'>Students: </span>{students}</p>

          <button className='btn btn-info'>Book Now</button>
         
        </div>
    );
};

export default ClassesCard;