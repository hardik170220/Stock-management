"use client"
import React from 'react';
import { FaBoxOpen, FaChartBar, FaTools } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <>
    <h1 className="text-3xl text-center mt-10">About Us</h1>
    <div className=" min-h-screen flex justify-center ">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className=" shadow-md rounded-lg overflow-hidden">
            <div className=" flex flex-col items-start justify-center p-4 border h-80 ">
              <div className="flex items-center mb-4">
                <FaBoxOpen className="text-blue-500 mr-2" size={100} />
                <h2 className="text-lg font-bold">Efficient Inventory Management</h2>
              </div>
              <p className="text-gray-400">
                Stock Management App is designed to help businesses efficiently manage their inventory,
                track stock movements, and monitor inventory levels with ease.
              </p>
            </div>
          </div>

          <div className="shadow-md rounded-lg overflow-hidden">
            <div className=" flex flex-col items-start justify-center p-4 border h-80 ">
              <div className="flex items-center mb-4">
                <FaChartBar className="text-green-500 mr-2" size={84} /> {/* Use different color */}
                <h2 className="text-lg font-bold">Insightful Reporting</h2>
              </div>
              <p className="text-gray-400">
                Generate insightful reports to gain valuable insights into your stock data and make informed decisions.
              </p>
            </div>
          </div>

          <div className=" shadow-md rounded-lg overflow-hidden">
            <div className=" flex flex-col items-start justify-center p-4 border h-80 ">
              <div className="flex items-center mb-4">
                <FaTools className="text-red-500 mr-2" size={84} /> {/* Use different color */}
                <h2 className="text-lg font-bold">User-Friendly Interface</h2>
              </div>
              <p className="text-gray-400">
                Our app features a user-friendly interface with intuitive features to streamline your stock management tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
