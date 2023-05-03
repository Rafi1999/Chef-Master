import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main.jsx'
import Home from './Components/Home/Home.jsx'
import Blog from './Components/Blog/Blog.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import ChefDetails from './Components/Home/ChefDetails/ChefDetails.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/chefDetails/:id',
        element:<ChefDetails></ChefDetails>,
        loader:({params})=>fetch(`https://chef-master-server-rafi1999.vercel.app/chefData/${params.id}`)
      }
    ] 
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
