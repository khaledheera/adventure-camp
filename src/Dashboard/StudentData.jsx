import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const StudentData = ({classes}) => {
    const{image, className, instructor_name,instructor_email, price ,_id}=classes
    const [selected, setSelected] = useState([]);
    const handleDelete = (id) => {
      const proceed = confirm("Are You sure you want to delete");
      if (proceed) {
        fetch(`https://adventure-camp-server.vercel.app/selected/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              toast.success(`${className} Delete successfully`)
                 
              const remaining = selected.filter((selected) => selected._id !== id);
              setSelected(remaining);
            }
          });
      }
    };
  
  
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
        <p className='text-gray-900 whitespace-no-wrap'>${price}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white '>
      <div className=''>
<Link to={`/dashboard/payment/${_id}`}>
  <button className='btn btn-accent'>
    Pay
  </button>
</Link>
<hr />

      <span  onClick={() => handleDelete(_id)} className='btn btn-warning'>Delete</span></div>

      </td>
    
                
            </tr>
        
    );
};

export default StudentData;