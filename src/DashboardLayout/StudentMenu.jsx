import { NavLink } from 'react-router-dom'
import { BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import React, { useContext, useState } from "react";
import { AuthContext } from '../Provider/AuthProvider'
import RequestModal from '../Dashboard/Modal/RequestModal'
import { becomeInstructor } from '../Api/auth'
import { toast } from 'react-hot-toast';

const StudentMenu = () => {
    const { user,role, setRole} = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false)
    const [modal, setModal] = useState(false)
    
  
    const modalHandler = email => {
      becomeInstructor(email).then(data => {
        console.log(data)
        toast.success('You are Instructor now, Post Class!')
        setRole('instructor')
        closeModal()
      })
    }
    const closeModal = () => {
      setModal(false)
    }




    const menuItems = (
        <React.Fragment >
          <div 
            onClick={() => setIsOpen(!isOpen)}
          className='hidden md:block text-sm font-semibold rounded-full  px-8   transition'>
            {!role && (
                <button
                  className='cursor-pointer hover:bg-neutral-100  px-4 '
                  onClick={() => setModal(true)}
                  disabled={!user}
                >
                  Become An Instructor?
                </button>
              )}



            </div>
     
        </React.Fragment>
      );
      
  return (
    <>
      <NavLink
        to='/dashboard/selectedClasses'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <BsFingerprint className='w-5 h-5' />

        <span className='mx-4 font-medium'>My Selected Classes</span>
      </NavLink>
      <NavLink
        to='/dashboard/enrollClass'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <BsFingerprint className='w-5 h-5' />

        <span className='mx-4 font-medium'>My Enrolled Classes</span>
      </NavLink>
      <NavLink
        to='/dashboard/paymentHistory'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <BsFingerprint className='w-5 h-5' />

        <span className='mx-4 font-medium'>Payment History</span>
      </NavLink>

      {!role && (
        <div className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
          <GrUserAdmin className='w-5 h-5' />

          <span className='mx-4 font-medium'>{menuItems}</span>

          <RequestModal
        email={user?.email}
        modalHandler={modalHandler}
        isOpen={modal}
        closeModal={closeModal}
      />
        </div>
      )}
    </>
  )
}

export default StudentMenu