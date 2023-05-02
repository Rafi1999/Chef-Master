import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {MdFoodBank} from 'react-icons/md';
const Header = () => {
    return (
        <NavLink className="navbar bg-gray-300 font-medium flex justify-between">
        <h3 className='text-3xl font-sans font-medium hover:text-orange-400'><MdFoodBank className='text-orange-500 text-5xl'></MdFoodBank>Chef-Master-Bangladesh</h3>
        <div className='flex gap-7 mr-5'>
        <Link to='/' className='hover:text-red-500'>Home</Link>
        <Link to='/blog'  className='hover:text-red-500'>Blog</Link>
        <button><Link to='/login' className='hover:text-red-500'>Login</Link></button>
        </div>
        </NavLink>
    );
};

export default Header;