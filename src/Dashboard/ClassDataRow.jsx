
import React from 'react';
import useAxiosSecure from '../Hook/useAxiosSecure';
import ClassModal from './Modal/ClassModal';
import Swal from 'sweetalert2';

const ClassDataRow = ({instructorClass,refetch}) => {
    const{image, className, status, instructor_name,instructor_email, seats, price,feedback,_id }=instructorClass
    const [axiosSecure] = useAxiosSecure();

    const handleApprove = (updateClass) => {
      const updateStatus = {
        status: "Approved",
      }; 
      const classUpdateData = {
        classId: updateClass._id,
        className: updateClass. className,
        image:updateClass.image,
        price:updateClass.price,
        seats:updateClass.seats,
        students: updateClass.students,
        instructor_name:updateClass.instructor_name,
        instructor_email:updateClass.instructor_email,
        status: "Approved",
      }
      axiosSecure.patch(`/manageClasses/${updateClass._id}`,{
        updateStatus,
        classUpdateData
      })
.then((data)=>{
  console.log(data.data);
  if(
    data.data.updateResult.modifiedCount>0 &&
    data.data.addResult.insertedId
  ){
    Swal.fire({
      position: "top",
      icon: "success",
      title: `Approved`,
      showConfirmButton: false,
      timer: 1500,});
      refetch();
  }
  
})
.catch((error)=>{
  console.log(error);
})

    }
    const handleDeny = (updateClass) => {
      const updateStatus = {
        status: "Denied",
      }; 
      const classUpdateData = {
        classId: updateClass._id,
        className: updateClass. className,
        image:updateClass.image,
        price:updateClass.price,
        seats:updateClass.seats,
        students: updateClass.students,
        instructor_name:updateClass.instructor_name,
        instructor_email:updateClass.instructor_email,
        status: "Denied",
      }
      axiosSecure.patch(`/manageClasses/${updateClass._id}`,{
        updateStatus,
        classUpdateData
      })
.then((data)=>{
  console.log(data.data);
  if(
    data.data.updateResult.modifiedCount>0 &&
    data.data.addResult.insertedId
  ){
    Swal.fire({
      position: "top",
      icon: "error",
      title: `Denied`,
      showConfirmButton: false,
      timer: 1500,});
      refetch();
  }
})
.catch((error)=>{
  console.log(error);
})

    }





  





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
        {seats}
      </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white '>
        <p className='text-gray-900 whitespace-no-wrap'>${price}</p>
      </td>
      <td>{status}</td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white '>
      <button
      onClick={()=>handleApprove(instructorClass)}
      className={`hover:scale-110 translate transform hover:underline badge border-green-400 font-bold ${ status ==="Approved"||status ==="Denied"?"btn-disabled":""}`}
      >
Approved
      </button>
      <hr />
      <button
      onClick={()=>handleDeny(instructorClass)}
      className={`hover:scale-110 translate transform hover:underline badge border-green-400 font-bold ${status ==="Approved"||status ==="Denied"?"btn-disabled":""}`}
      >
Deny
      </button>
      <hr />
     <label
     htmlFor={`modal-${instructorClass.classId}`}
    className={` cursor-pointer hover:scale-110 translate transform hover:underline badge ${ feedback ? "btn-disabled":''}`}
     >
      Feedback
     </label>
     <ClassModal id={instructorClass.classId}  refetch={refetch}/>

      </td>
    
                
            </tr>
        
    );
};

export default ClassDataRow;