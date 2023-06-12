import React, { useContext, useState } from 'react';
import InstructorMenu from './InstructorMenu';
import StudentMenu from './StudentMenu';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const StudentInstructor = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
    const {  role } = useContext(AuthContext)
  
    const [isActive, setActive] = useState('false')
    const toggleHandler = event => {
      setToggle(event.target.checked)
    }
    // Sidebar Responsive Handler
    const handleToggle = () => {
      setActive(!isActive)
    }
    return (
        <div className='flex flex-col justify-between flex-1 mt-6'>
        <nav>
        {role && role === 'instructor' ? (
          <>
            <label
              htmlFor='Toggle3'
              className='inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800'
            >
              <input
                onChange={toggleHandler}
                id='Toggle3'
                type='checkbox'
                className='hidden peer'
              />
              <span className='px-4 py-1 rounded-l-md bg-sky-400 peer-checked:bg-gray-300'>
                Student
              </span>
              <span className='px-4 py-1 rounded-r-md bg-gray-300 peer-checked:bg-sky-400'>
                Instructor
              </span>
            </label>
            {/* Menu Links */}
            {toggle ? <InstructorMenu/> : <StudentMenu/>}
          </>
        ) : (
          <StudentMenu/>
        )}
      </nav>
      </div>
    );
};

export default StudentInstructor;