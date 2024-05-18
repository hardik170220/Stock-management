"use client"
import UserContext from '@/context/userContext';
import React, { useContext } from 'react';
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';

const ProfileCard = ( ) => {

  const context = useContext(UserContext);
  return (
    <div className='grid grid-cols-12 '>
    <div className="col-span-4 col-start-5 p-6 co max-w-sm rounded overflow-hidden mt-20 shadow-lg flex flex-col items-center ">
      <FaUserCircle size={100} />
      <div className="px-6 py-4 flex flex-col items-center">
        <div className="font-bold text-xl mb-2">{context.user?.Fname} {context.user?.Lname}</div>
        <p className="text-gray-400 text-base">Email: {context.user?.email}</p>
        <p className="text-gray-400 text-base">ID: {context.user?._id}</p>
      </div>

      <Link href={"/showStock"}
      className="bg-green-700 hover:bg-green-500 text-white font-bold mb-10 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Your Stocks
        </Link>
    </div>
    </div>
  );
};

export default ProfileCard;
