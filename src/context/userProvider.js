"use client";
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { CurrentUser } from '@/helper/userServices';
import { toast } from 'react-toastify';

const UserProvider = ({children}) => {
  
  const [user , setUser] =  useState(undefined);
 
  useEffect(()=>{

    async function load(){
      try {
        const logUser = await CurrentUser();
        console.log(logUser);
        setUser({...logUser});

        
      } catch (error) {
        console.log(error);
        // toast.error("error in loading current user");
        setUser(undefined);
      }
    }
    load();


  },[])
  return( <UserContext.Provider value={{user , setUser}}>
          {children}
       </UserContext.Provider>
  )
}

export default UserProvider