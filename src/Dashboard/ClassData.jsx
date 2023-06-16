import React from 'react';

const ClassData= ({classs}) => {
    const{image, className, students, instructor_name,instructor_email, seats, price,status,feedback }=classs
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
        <p className='text-gray-900 whitespace-no-wrap'>${price}</p>
      </td>
      
      <td className='px-5 py-5 border-b border-gray-200 bg-white '>
        {students}
      </td>
      
      <td className='px-5 py-5 border-b border-gray-200 bg-white '>
        {feedback}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white '>{status}</td>
      
    
                
            </tr>
        
    );
};

export default ClassData;