import { useContext, useEffect, useState } from 'react'
import ClassDataRow from '../Dashboard/ClassDataRow'
import useAxiosSecure from '../Hook/useAxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const {user}=useContext(AuthContext)

  const { data: classes = [], refetch } = useQuery({
queryKey:["manageClasses",user?.email],
queryFn:async()=>{
  const data1=axiosSecure.get("/manageClasses")
  const data2=axiosSecure.get("/updatedClasses")
  try{
    const [response1,response2]=await Promise.all([data1,data2]);
    const combinedResponse=[... response1.data, ... response2.data]
    return combinedResponse
  }
  catch(error){
    console.log(error);
  }
}
  });

  useEffect(()=>{
    if(classes.length != 0){
      refetch()
    }
  },[classes,refetch])
 


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
                    Available seats
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
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    classes.map(instructorClass => (
                      <ClassDataRow
                        key={instructorClass?._id}
                        instructorClass={instructorClass}
                        refetch={refetch}
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

export default ManageClasses;