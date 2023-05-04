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
        <h3 className='text-3xl font-sans font-medium hover:text-orange-400'><MdFoodBank className='text-orange-500 text-5xl'></MdFoodBank>Chef-Master-Bangladesh</h3>
        <div className='flex gap-7 mr-5'>
        <NavLink to='/' className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-600"
                        : isPending
                        ? "pending"
                        : "hover:text-red-500"
                    } >Home</NavLink>
        <NavLink to='/blog'  className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-600"
                        : isPending
                        ? "pending"
                        : "hover:text-red-500"
                    }>Blog</NavLink>
        {user ? <div className='flex gap-2'><img className='relative rounded-full w-12' src={user.photoURL} onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}></img>{show && <p className='relative top-3'>{user.displayName}</p>}<button onClick={logOut}>LogOut</button> </div> : <button><NavLink to='/login' className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-600"
                        : isPending
                        ? "pending"
                        : "hover:text-red-500"
                    }>Login</NavLink></button>}
        
        </div>
        </nav>
    );
};

export default Header;