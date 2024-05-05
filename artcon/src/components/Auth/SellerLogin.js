import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../style/bg.css';
const Sellerlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/seller',{email,password})
    .then(result=>{console.log(result);
      if(result.data==="Success"){
        toast.success(`Welcome back!`, { position: "top-right" ,autoClose:1500});
        navigate('/sellerPage');
        
      }
      else if(result.data==="Invalid"){
        toast.error("Invalid email or password!", { position: "top-right",autoClose:1500 });
        //  navigate('/Landing');
      }
      else{
        toast.error("No user found!", { position: "top-right",autoClose:1500 });
      }
    })
    .catch(err=>{console.log(err.message)});
  };
  return (
    <div className="min-h-screen flex items-center justify-center signup-background">
      <div className="relative">
      <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-white via-white to-orange-600 shadow-lg animate-pulse" />
        <div
          id="form-container"
          className="bg-white p-8 rounded-lg shadow-2xl w-full md:w-80 relative z-10 transform transition duration-500 ease-in-out flex flex-col items-center justify-center"
        >
          <h2
            id="form-title"
            className="text-center text-3xl font-bold mb-6 text-gray-800"
          >
            Artisan Login
          </h2>
          <form className="space-y-5 w-full" onSubmit={handleSubmit}>
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              pattern="^(?=.*[A-Z])(?=.*[0-9]).{8,}$"
              title="Password must contain at least 8 characters including one uppercase letter and one digit."
            />
           <button type="submit" className="w-full h-12 bg-red-400 hover:bg-gray-500 text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
             Login as Seller
            </button>
          </form>
          <div className="mt-4"></div>
          <a className="text-red-400 hover:text-violet-800 font-bold text-sm" href="/">
            Forgot Password?
          </a>
          <div className="mt-2"></div>
          <div className="flex items-center mt-2">
            {/* <p className="text-gray-700 font-semibold">Don't have an account?</p> */}
            <Link to="/registerseller" className="flex items-center bg-orange-500 text-white gap-1 ml-2 px-4 py-2 cursor-pointer rounded-md hover:bg-blue-400 duration-300 hover:translate-x-2">
              Register as Seller
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellerlogin;
