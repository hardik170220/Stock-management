"use client";
import UserContext from '@/context/userContext';
import { Login } from '@/helper/userServices';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const router = useRouter();
  const context = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      toast.info("Invalid Data !!", {
        position: "top-center",
      });
      return;
    }
    // console.log('Form Data:', loginData);
    try {
      const result = await Login(loginData);
      console.log(result)
      toast.success("Logged in");
      context.setUser(result.user);
      router.push("/profile/user");
      
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
   
  };

  return (
    <center>
    <div className="flex justify-center w-2/6 mt-6 border border-gray-500">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-lg p-8">
        <h2 className="text-2xl  font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium text-left">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-1 p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium text-left">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full mt-1 p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Login
        </button>
      </form>
    </div>
    </center>
  );
};

export default LoginForm;
