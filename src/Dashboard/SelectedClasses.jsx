import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
// import { getClasses } from '../Api/classess'
import StudentData from './StudentData'

const SelectedClass = () => {
    const { user } = useContext(AuthContext)
  const [classes, setClasses] = useState([])
 
  useEffect(() => {
    fetch(`http://localhost:5000/addclasses/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setClasses(data);
      });
  }, [user?.email]);
 
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
                    classes.map(classs => (
                      <StudentData
                        key={classs?._id}
                        classs={classs}
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