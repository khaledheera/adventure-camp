import React from 'react';

const Instructors = ({instructor}) => {
    const { instructorImg,
        instructor_name,students} = instructor;
    return (
        <div className='card lg:w-96 glass px-4 py-5 mx-auto  md:px-24 lg:px-10'>
          <img
            className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src={instructorImg}
            alt=""
          />
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          {
instructor_name}
          </p>
          
          <p><span className='font-bold'>Students: </span>{students}</p>
         
        </div>
    );
};

export default Instructors;