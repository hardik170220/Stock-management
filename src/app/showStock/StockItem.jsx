"use client";
import React from 'react';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2'


const StockItem = ({ stockId,name, quantity, price,deleteParentStock }) => {
  

  async function Dodelete(stockId){
   
    deleteParentStock(stockId);
   

  }


   function removeAlrt(){
   
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
         Dodelete(stockId);
        Swal.fire({
          title: "Stock Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        }
      );
      }
    });
  }
  return (
    
    <tr className='text-black' >
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{name}</td>
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{quantity}</td>
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{price}</td>
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{quantity * price}</td>
    <td onClick={()=>{removeAlrt()} } className="px-6 py-4 whitespace-no-wrap border-b text-2xl cursor-pointer  border-gray-200"><MdDelete /></td>
    
  </tr>
  );
};

export default StockItem;
