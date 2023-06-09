import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";
import "./navbar.css";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import {  FaUserAlt } from "react-icons/fa";
import { AiOutlineMenu } from 'react-icons/ai'
import { AuthContext } from "../../../providers/AuthProvider";
import { becomeInstructor } from "../../../Api/auth";
import RequestModal from "../../Modal/RequestModal";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut, theme, handleToggleTheme ,role, setRole} = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false)
  const [modal, setModal] = useState(false)
  

  console.log(role)
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
      <li>
        <NavLink
          to="/"
          className={`font-medium rounded-xl  hover:underline duration-500 ${(
            isActive
          ) => (isActive ? "active" : undefined)}`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructor"
          className={`px-4 py-3 hover:bg-neutral-100 transition font-semibold  hover:underline duration-500 ${(
            isActive
          ) => (isActive ? "active" : undefined)}`}
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={`px-4 py-3 hover:bg-neutral-100 transition font-semibold hover:underline duration-500 ${(
            isActive
          ) => (isActive ? "active" : undefined)}`}
        >
         Classes
        </NavLink>
      </li>
      

      
      
      <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div className='hidden md:block text-sm font-semibold rounded-full py-3 px-8   transition'>
          {!role && (
            <button
              className='cursor-pointer hover:bg-neutral-100 py-3 px-4 '
              onClick={() => setModal(true)}
              disabled={!user}
            >
              Instructor?
            </button>
          )}
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <Link
              to='/'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Home
            </Link>
            {user ? (
              <>
                <Link
                  to='/dashboard'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Dashboard
                </Link>

                <div
                  onClick={() => {
                    setRole(null)
                    logOut()
                  }}
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to='/login'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Login
                </Link>
                <Link
                  to='/signup'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
     
    </div>

<li>
                <Link >
                  {user?.photoURL ? (
                    <div
                      className="tooltip tooltip-bottom tooltip-info"
                      data-tip={user?.displayName}
                    >
                      <div className="avatar online w-12 h-12">
                        <img
                          src={user.photoURL}
                          alt=""
                          className=" rounded-full "
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className="tooltip tooltip-bottom tooltip-info"
                      data-tip={user?.displayName}
                    >
                      <FaUserAlt className="w-6 h-6 text-white" />
                    </div>
                  )}
                </Link>
              </li>



      <div className="md:flex items-center cursor-pointer block mx-auto ">
        <span onClick={handleToggleTheme}>
          {theme ? (
            <SunIcon className="h-8 w-10 text-yellow-500" />
          ) : (
            <MoonIcon className="h-8 w-10 text-slate-800" />
          )}
        </span>
      </div>
    </React.Fragment>
  );

  return (
    <div>
      <div className="navbar w-[95%] mx-auto pt-6 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-3"
            >
              {menuItems}
            </ul>
          </div>

          <div>
            <Link to={"/"}>
              <img src={logo}width='150'
 height='100' alt="" className="cursor-pointer" />
            </Link>
          </div>
        </div>

        <div className="navbar-end hidden lg:flex items-center">
          <ul className="menu menu-horizontal  space-x-2 ">{menuItems}</ul>
        </div>
        <div className="lg:hidden navbar-end">
          <label
            htmlFor="dashboard-drawer"
            tabIndex={2}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
      <RequestModal
        email={user?.email}
        modalHandler={modalHandler}
        isOpen={modal}
        closeModal={closeModal}
      />
      

    </div>
  );
};

export default Navbar;
