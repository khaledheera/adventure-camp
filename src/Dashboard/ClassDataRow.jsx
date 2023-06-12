import React from 'react';

const ClassDataRow = ({classs}) => {
    const{image, className, students, instructor_name,instructor_email, availableSeats, price }=classs
    return (
    
            <tr>
                
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{className}</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white '>
      <p className="mb-2   leading-none ">
        {instructor_name}
      </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white '>
      <p className="mb-2  leading-none ">
        {instructor_email}
      </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white '>
      <p className="mb-2   leading-none" >
        {availableSeats}
      </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white '>
        <p className='text-gray-900 whitespace-no-wrap'>${price}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white '>
      <div className='flex justify-center'><span className='btn btn-success'>Approve</span>
      <span className='btn btn-warning'>Deny</span>
      <span className='btn btn-neutral'>send feedback</span></div>

      </td>
    
                
            </tr>
        
    );
};

export default ClassDataRow;