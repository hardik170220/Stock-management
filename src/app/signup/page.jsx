"use client";
import { SignUp } from '@/helper/userServices';
import { NextResponse } from 'next/server';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SignUpForm = () => {
  const [signupData, setSignupData] = useState({
    Fname: '',
    Lname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the data to your backend
    // console.log('Form submitted:', signupData);
    try {
      const data = await SignUp(signupData);
      console.log(data);
      toast.success("Successfully Signup");
      return NextResponse.json({
        message:"SignUp Suceesfully"
      })   
    } catch (error) {
       console.log(error);
       toast.error("failed Signup");
    }
   
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-10 shadow-md rounded-md border  border-gray-400">
      <h2 className="text-2xl font-semibold mb-4 text-center">SignUp Here</h2>
      <form onSubmit={handleSubmit} className='text-black'>
        <div className="mb-4">
        <label htmlFor="Fname" className="block text-gray-700 font-medium text-left">First Name</label>
          <input
            type="text"
            name="Fname"
            placeholder="First Name"
            value={signupData.Fname}
            onChange={handleChange}
            className="border rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
        <label htmlFor="Lname" className="block text-gray-700 font-medium text-left">Last Name</label>
          <input
            type="text"
            name="Lname"
            placeholder="Last Name"
            value={signupData.Lname}
            onChange={handleChange}
            className="border rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium text-left">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signupData.email}
            onChange={handleChange}
            className="border rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 font-medium text-left">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signupData.password}
            onChange={handleChange}
            className="border rounded-md px-4 py-2 w-full"
          />
        </div>
        <button
          type="submit" 
          className="bg-blue-500 w-full text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
