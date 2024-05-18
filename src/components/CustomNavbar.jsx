"use client";
import UserContext from '@/context/userContext';
import { Logout } from '@/helper/userServices';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { FaUserCircle } from "react-icons/fa";
import Swal from 'sweetalert2'
import { useTheme } from 'next-themes';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import Button from '@mui/material/Button';



const CustomNavbar = () => {

  const{theme , setTheme} = useTheme();
  const [themeName, setThemeName] = useState('light');
  
  const toggleTheme = () => {
    setThemeName((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    if(theme==="light"){
      setTheme("dark")

    }
    else {
      setTheme("light")
    }
  };
  
  const context = useContext(UserContext);
  const router = useRouter();
  console.log(context);

 

  async function doLogout() {
    try {
      const result = await Logout();
      console.log(result);
      context.setUser(undefined);
      // toast.success("Logout Successfully")
      router.push("/")

    } catch (error) {
      console.log(error);
      toast.error("Logout Error")
    }
  }

  function logoutAlrt(){
    Swal.fire({
      title: "Do you want to Logout?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logged out!"
    }).then((result) => {
      if (result.isConfirmed) {
         doLogout();
        Swal.fire({
          title: "Logged Out!",
          text: "You have Successfully Logged out.",
          icon: "success"
        }
      );
      }
    });
  }

  return (
    <header className="body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href='/' className="flex title-font font-medium items-center  mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl font">WolfStock Tracker</span>
        </a>

         
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {
            context.user && (

              <><Link href={"/"} className="mr-5 hover:text-gray-300">Home</Link>
                <Link href={"/addStock"} className="mr-5 hover:text-gray-300">Add Stock</Link>
                <Link href={"/showStock"} className="mr-5 hover:text-gray-300">View Inventory</Link>
                <Link href={"/about"} className="mr-5 hover:text-gray-300">About</Link>
              </>
            )
          }

        </nav>
        <div className='flex items-center gap-4'>
          {
            !context.user && (
              <>
                <Link href={"/login"}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login
                </Link>
                <Link href={"/signup"}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Signup
                </Link>
              </>
            )

          }

          {
            context.user && (

              <div className='flex gap-6 items-center'>
                <Link href={"/profile/user"} className='flex gap-2 justify-center items-center'>
                  <FaUserCircle size={30} />
                  <a >{context.user.Fname}</a>
                </Link>
                <button onClick={logoutAlrt}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Logout
                </button>
              </div>
            )
          }
        <div className='mx-4 flex gap-7'>
     
          <Button  className={`${theme==="dark"?"bg-white":"bg-black"} ${theme==="dark"?"hover:bg-slate-300 ":"hover:bg-slate-600 "} ${theme==="dark"?"text-black":"text-white"} font-bold  rounded-full py-2 focus:outline-none focus:shadow-outline` } onClick={toggleTheme}>{theme==="dark"?<MdOutlineLightMode size={20} />:<MdOutlineDarkMode size={20}/>}</Button>
     
        </div>

        </div>
      </div>
    </header>
  )
}

export default CustomNavbar