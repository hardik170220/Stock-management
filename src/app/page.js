"use client"
import React from 'react';
import banner from "@/assets/banner.png"
import Image from 'next/image';


const HomePage = () => {
  
  return (
    <div className=" min-h-full px-36 ">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='flex flex-col justify-center gap-3 '>
            <h1 className="text-4xl font-bold mb-4">Welcome to Stock Management System</h1>
            <p className="text-lg  mb-4">Effortless Stock Control, Seamless Business Flow?.It succinctly encapsulates the essence of a stock management app, highlighting its ease of use and its potential to streamline business operations.</p>
            <button className=" bg-blue-700 w-32 text-white py-2 px-4 rounded hover:bg-blue-600">Get Started</button>
          </div>
          <div>
            
            <Image src={banner} height={400} width={600} alt='stock management'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
