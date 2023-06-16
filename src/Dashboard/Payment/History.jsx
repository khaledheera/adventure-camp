import React from 'react';

const History = ({classs}) => {
    const{image, className, 
        transactionId, price,date }=classs
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
        {
transactionId}
      </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white '>
      <p className="mb-2  leading-none ">
      $ {price}
      </p>
      </td>
     
      <td className='px-5 py-5 border-b border-gray-200 bg-white '>
        <p className='text-gray-900 whitespace-no-wrap'>{date}</p>
      </td>
     
    
                
            </tr>
        
    );
};

export default History;