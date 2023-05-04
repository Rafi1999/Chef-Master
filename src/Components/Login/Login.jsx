import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const { signIn,signInWithGoggle,signInWithGithub } = useContext(AuthContext);
    const [error,setError] = useState("")
    const [success,setSuccess] = useState("")
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
  
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    
    const handleSubmit= (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (emailError) {
            e.target.email.focus();
            return;
          } else if (passwordError) {
            e.target.password.focus();
            return;
          }        signIn(email,password)
        .then(userCredential=>{
            const user = userCredential.user;
            setSuccess("User Login Successfully")
            setError("")
            form.reset();
            setPassword(""),
            navigate(from, { replace: true })
        })
        .catch(err=>{
            console.log(err.message.auth);
            setError(err.message);
        })
    }
    const goggle=()=>{
      signInWithGoggle(navigate,from);
    }
    const github=()=>{
      signInWithGithub(navigate,from);
    }
    const handlePassword = (e) => {
        e.preventDefault;
        const passwordInput = e.target.value;
        setPassword(passwordInput);
        if (passwordInput.length < 6) {
          setPasswordError("Password must be at least 6 characters long");
        } else if (!/[A-Z]/.test(passwordInput)) {
          setPasswordError("Password must contain at least one capital letter");
        } else {
          setPasswordError("");
        }
      };
    return (
        <div className='w-full my-12 max-w-md mx-auto'>
            <h2 className='text-2xl text-center font-semibold'>Login</h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name='email' placeholder="Email" required></input>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name='password' required value={password} onChange={handlePassword} type="password" placeholder="****************** "></input>
     {passwordError && <span className='error'>{passwordError}</span>} 
    </div>
    <div className="flex items-center justify-between">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
      <Link to='/register' className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
        New here? Please Register.
      </Link>
    </div>
    <p className="text-error">{error}</p>
    <p className='text-success'>{success}</p>
    
  </form>
  <div className='flex justify-between mt-4 text-white font-bold'>
        <button onClick={goggle} className='bg-orange-500 py-3 px-3 rounded '>Sign-in With Google</button>
        <button onClick={github} className='bg-yellow-500 py-3 px-3 rounded '>Sign-in With Github</button>
    </div>
        </div>
    );
};


export default Login;