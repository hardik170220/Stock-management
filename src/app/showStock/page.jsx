"use client"
import React, { useContext, useEffect, useState } from 'react';
import StockItem from './StockItem';
import { DeleteStockOfUser, GetStockOfUser, ShowStock } from '@/helper/stockServices';
import UserContext from '@/context/userContext';
import { toast } from 'react-toastify';


const StockList = () => {

  const context = useContext(UserContext);

  const [stock, setStock] = useState([]);
 

  async function load(userId){

    try {
      const stock = await GetStockOfUser(userId);
      setStock([...stock])
      console.log(stock);
      
      
    } catch (error) {
      console.log(error)
    }

  
    
  }

 useEffect( ()=>{
   
  if(context.user)
  load(context.user._id);

 } ,[context.user])

  

 async function deleteParentStock(stockId){

  try {

    const result =await DeleteStockOfUser(stockId);
    console.log(result);
    

    // toast.success("stock deleted Successfully..");
    const newStocks = stock.filter((item)=>item._id!=stockId);
    setStock([...newStocks])
  } catch (error) {
    console.log(error);
    toast.error("failed to delete stock")
    
  }


 }
  return (
  //   <div className="container mx-auto">
  //     <h2 className="text-2xl font-bold mb-4">Stocks</h2>
  //     {stock.map((stock, index) => (
  //       <StockItem
  //         key={index}
  //         name={stock.sname}
  //         quantity={stock.quantity}
  //         price={stock.price}
  //       />
  //     ))}
  //   </div>
  <div className="overflow-x-auto flex flex-col items-center">
    <h1 className='text-3xl my-10'>Hey {context.user?.Fname} Welcome to your Inventory</h1>
  <table className="w-2/3 border-collapse border border-gray-300">
    <thead>
      <tr>
        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Stock</th>
        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Price per Stock</th>
        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Total Price</th>
        <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Remove</th>
      </tr>
    </thead>
    <tbody className="bg-white">
    {stock.map((stock, index) => (
         <StockItem
           key={index}
          name={stock.sname}
           quantity={stock.quantity}
          price={stock.price}
          stockId={stock._id}
          deleteParentStock={deleteParentStock}
        />
       ))}
    </tbody>
  </table>
</div>


   );
};

export default StockList;
