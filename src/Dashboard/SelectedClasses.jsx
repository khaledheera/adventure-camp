import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import useAxiosSecure from '../Hook/useAxiosSecure';
import StudentData from './StudentData'
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const SelectedClass = () => {
  const [selected, setSelected] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const{user,loading}=useContext(AuthContext)
  const {data: selectedClass=[],refetch}=useQuery({
    queryKey:["selected",user?.email],
    queryFn:async()=>{
    const res=await axiosSecure.get(`/selected?email=${user?.email}`)
    return res.data
    }
    
  })

  // const handleDelete=(deleteClass)=>{
  //   axiosSecure
  //   .delete(`/selected/${deleteClass?._id}`)
  //   .then((data)=>{
  //     if (data.data.deletedCount>0){
  //       Swal.fire({
  //         position: "top",
  //         icon: "success",
  //         title: `Delete Successfully`,
  //         showConfirmButton: false,
  //         timer: 1500,});
  //     }
  //     refetch();
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   })
  // }



  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/selected/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success(`${name} Delete successfully`)
               
            const remaining = selected.filter((selected) => selected._id !== id);
            setSelected(remaining);
          }
        });
    }
  };

 
    return (
        <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Class 
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                    Instructor Name
                    </th>
                    
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                     Instructor Email
                    </th>
                   
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                     Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    selectedClass.map(classes => (
                      <StudentData
                        key={classes?._id}
                        classes={classes}
                        handleDelete={handleDelete}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SelectedClass;