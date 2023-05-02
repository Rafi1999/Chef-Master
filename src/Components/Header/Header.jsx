import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <NavLink className="navbar bg-base-100 font-medium flex justify-between">
        <h3 className='text-3xl font-sans font-medium'>Chef-Master-Bangladesh</h3>
        <div className='flex gap-5 mr-2'>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/login'>Login</Link>
        </div>
        </NavLink>
    );
};

export default Header;