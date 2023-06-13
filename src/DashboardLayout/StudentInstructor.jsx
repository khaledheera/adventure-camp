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
            <InstructorMenu/>
          </>
        ) : (
          <StudentMenu/>
        )}
      </nav>
      </div>
    );
};

export default StudentInstructor;