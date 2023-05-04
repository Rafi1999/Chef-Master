import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
        <Header></Header>
        <Outlet></Outlet>
            <ToastContainer></ToastContainer>
            <div className='relative bottom-0 h-fit'><Footer></Footer></div>
        </div>
    );
};

export default Main;