import React from 'react';
import { FaBook, FaUsers } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const AdminMenu = () => {
    return (
        <div>
             <li><NavLink to="/dashboard/manageClasses"><FaBook></FaBook> Manage Classes</NavLink></li>
                            <li><NavLink to="/dashboard/AllUsers"><FaUsers></FaUsers> All Users</NavLink></li>
        </div>
    );
};

export default AdminMenu;