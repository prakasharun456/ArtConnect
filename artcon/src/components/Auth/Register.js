import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../style/bg.css';
const Register = () => {
  const[firstName,setFirstName]=useState('');
  const[lastName,setLastName]=useState('');
  const[email,setEmail]=useState('');
  const[phone,setPhone]=useState('');
  const[password,setPassword]=useState('');
  const[address,setAddress]=useState('');
  const[city,setCity]=useState('');

  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/register',{firstName,lastName,email,phone,address,city,password})
    .then(result=>{console.log(result);
      
      toast.success(`Registered Successfully!`, { position: "top-right" ,autoClose:2000});
      navigate('/login');
    })
    .catch((err)=>{ console.error("Error:", err);});
  };
  return (
    <div className="min-h-screen flex items-center justify-center signup-background" >
      <div className="relative">
         <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-red-400 to-white  shadow-lg animate-pulse" />
        <div
          id="form-container"
          className="bg-white px-16 py-3 rounded-lg shadow-2xl w-85 relative z-10 transform transition duration-500 ease-in-out"
        >
          <h2
            id="form-title"
            className="text-center text-3xl font-bold mb-10 text-gray-800"
          >
            Register
          </h2>
          <form className="w-70 space-y-5" onSubmit={handleSubmit}>
          <input type='text'id='fname' className="w-full h-12 border border-gray-800 px-2 rounded-lg"  value={firstName}
               onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' required/>
          <br/>
          <input type='text'id='lname' className="w-full h-12 border border-gray-800 px-2 rounded-lg"  value={lastName}
                onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' required/>
          <br/>
          <input type='email'id='mail' className="w-full h-12 border border-gray-800 px-2 rounded-lg"  value={email}
               onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' required/>
          <br/>   
          
          <input
                type="text"
                className="w-full h-12 border border-gray-800 px-2 rounded-lg"
                id='phn'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder='Mobile number'
                required
          />
          <br/>
          <input
                type="text"
                className="w-full h-12 border border-gray-800 px-2 rounded-lg"
                id='address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder='Address'
                required
          />
          <br/>
          <input
                type="text"
                className="w-full h-12 border border-gray-800 px-2 rounded-lg"
                id='address'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder='City'
                required
          />
          <br/>
     

          <input
              type='password'
              className="w-full h-12 border border-gray-800 px-2 rounded-lg"
              id='pwd'
              name='password' 
              value={password} required
              onChange={(e) => setPassword(e.target.value)}
              placeholder='password'
              pattern="^(?=.*[A-Z])(?=.*[0-9]).{8,}$"
              title="Password must contain at least 8 characters including one uppercase letter and one digit."
              />
        
          <button type="submit" className="w-full h-12 bg-red-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Register
          </button>
          </form>
          <div className="flex items-center mt-3">
              <p className="text-gray-700 font-semi">Already have an account.</p>
              <button className="flex items-center bg-blue-500 text-white gap-1 ml-2 px-3 py-1 cursor-pointer rounded-md hover:bg-orange-400 duration-300  hover:transform hover:translate-x-1">
               <Link to="/login" className="text-white-800 font-semibold tracking-widest">login</Link>
               </button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
