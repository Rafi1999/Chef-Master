import React, { useContext, useState } from 'react';
import { Link, NavLink,useLocation } from 'react-router-dom';
import {MdFoodBank} from 'react-icons/md';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const location = useLocation()
    const [show,setShow] = useState(false);
    return (
        <nav className="navbar bg-gray-300 font-medium flex justify-between py-4">
        <h3 className='text-sm md:text-3xl font-sans font-medium hover:text-orange-400'><MdFoodBank className='text-orange-500 text-2xl md:text-5xl'></MdFoodBank>Chef-Master-Bangladesh</h3>
        <div className='flex gap-2 md:gap-7 mr-4'>
        <NavLink to='/' className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-600 "
                        : isPending
                        ? "pending"
                        : "text-xs md:text-sm hover:text-red-500"
                    } >Home</NavLink>
        <NavLink to='/blog'  className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-600 "
                        : isPending
                        ? "pending"
                        : "text-xs md:text-sm hover:text-red-500 "
                    }>Blog</NavLink>
        {user ? <div className='flex md:gap-2'><img title={user.displayName} className='relative rounded-full w-12 h-12' src={user.photoURL}></img><button className='text-xs md:text-sm' onClick={logOut}>LogOut</button> </div> : <button><NavLink to='/login' className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-600 "
                        : isPending
                        ? "pending"
                        : "text-xs md:text-sm hover:text-red-500"
                    }>Login</NavLink></button>}
        
        </div>
        </nav>
    );
};

export default Header;