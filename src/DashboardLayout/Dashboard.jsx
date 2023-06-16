import React, { useContext } from "react";
import { FaHome} from 'react-icons/fa';
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../assets/images/logo/logo.png";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import useAdmin from "../Hook/useAdmin";
import StudentInstructor from "./StudentInstructor";

const Dashboard = () => {
  const { user, theme,role } = useContext(AuthContext);
  

  const [isAdmin] = useAdmin();
  // console.log(isAdmin);
  return (
    <>
      {/* <Navbar /> */}
      <div className="drawer lg:drawer-open  text-black">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        
        <div className="drawer-content flex flex-col items-center justify-center">
        

        <Outlet/>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          
          <ul className="menu p-4 w-80 h-full bg-cyan-300 text-black">
          <div className="">
              <Link to='/' className="w-full hidden md:flex py-2 justify-center items-center bg-sky-100 mx-auto">
                <img src={logo} alt="" />
              </Link>
              <div className="flex flex-col items-center mt-6 -mx-2">
                <Link to="/dashboard">
                  <img
                    className="object-cover w-24 h-24 mx-2 rounded-full"
                    src={user?.photoURL}
                    alt="avatar"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <Link to="/dashboard">
                  <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                    {user?.displayName}
                  </h4>
                </Link>
                <Link to="/dashboard">
                  <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                    {user?.email}
                  </p>
                </Link>
              </div>
            </div>
            {
              isAdmin ? <>
              <AdminMenu/>
              </>
              :
              <>
              <li>
              <StudentInstructor/>
            </li>
              </>
            }
             <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/classes"> Classes</NavLink></li>
                    <li><NavLink to="/Instructor">Instructor</NavLink></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
