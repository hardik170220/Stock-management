"use client";
import { ToastContainer, toast } from 'react-toastify';

import { AddStock } from '@/helper/stockServices';
import { NextResponse } from 'next/server';
import React, { useState } from 'react';

function StockForm() {
  const [formData, setFormData] = useState({
    sname: '',
    quantity: '',
    price: ''
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const result= await AddStock(formData);
      console.log(result);
      setFormData({
        sname: '',
        quantity: '',
        price: ""
      })
      
      toast.success("Successfully Added..",{
        position:"top-right"
      })
    } catch (error) {
      console.log(error);
      toast.error("Failed to Add Stock..",{
        position:"top-right"
      })
      
    }
   return NextResponse.json(formData);

   
  };

  return (
    <center>
      <h1 className="text-3xl m-10">Add Your Stock Here</h1>
      <form onSubmit={handleSubmit} className="flex  flex-col w-2/5 shadow-md border border-gray-400 rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="sname">
            Stock Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            id="sname"
            name="sname"
            type="text"
            placeholder="Stock Name"
            value={formData.sname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor="quantity">
            Quantity
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            id="quantity"
            name="quantity"
            type="text"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-left text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price Per Stock
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            name="price"
            type="text"
            step="0.01"
            placeholder="Price Per Stock"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Stock
          </button>
        </div>
      </form>
    </center>
  );
}

export default StockForm;
