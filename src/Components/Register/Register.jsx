import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../AuthProvider/AuthProvider';

 
const Register = () => {
  const {user,createUser} = useContext(AuthContext)
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
  const [error,setError] = useState("")
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
          }
        createUser(email,password)
        .then((userCredential)=>{
            const user = userCredential.user;
            setError("")
            form.reset();
            setPassword("")
        })
        .catch((error)=>{
            setError(error.message)
            console.log(error.message);
        })
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
        <div className='w-full max-w-md mx-auto my-12'>
        <h2 className='text-2xl text-center font-semibold'>Register</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Name
  </label>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name='name' placeholder="Name" required></input>
</div>
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Photo URL
  </label>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name='photo' placeholder="Photo URL" required></input>
</div>
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Email
  </label>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name='email' placeholder="Email" required></input>
</div>
<div className="mb-2">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Password
  </label>
  <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" required name='password' type="password" onChange={handlePassword}   placeholder="******************" value={password}></input>
  {passwordError && <span>{passwordError}</span>} 
</div>
<div className="flex items-center justify-between gap-4">
  <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Register">
    
  </input>
  <Link to='/login' className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
    Already have an account? Click Here
  </Link>
</div>
<br />
<p className='text-red-500'>{error}</p>
</form>
    </div>
    );
};

export default Register;