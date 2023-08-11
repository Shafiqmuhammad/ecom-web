'use client'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch} from "react-redux"
// import { cartActions } from '@/slice/cartSlice';

import React, {useEffect, useState} from 'react'
const toast_config:any =  {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  };

const notify = (text:any) => toast(text + " added Successfuly!", toast_config);

export default function AddToCartButton({item,setItem}:any) {

    const storeCart = (item:any) => {
        let data = JSON.parse(window.localStorage.getItem('cart') || '{}');
        const id:any = item._id;
    
        if (data[id]) {
          data[id] = { ...data[id], quantity: data[id].quantity + 1,  total_price: "$" + parseFloat(data[id].price.replace(/\$/g, "")) * parseInt(data[id].quantity + 1) };
        } else {
          data[id] = { ...item, ...{quantity: 1, total_price: item.price} };
        }
    
        window.localStorage.setItem('cart', JSON.stringify(data));
        if(setItem)
          setItem(data[id]);
        
        notify(item.title)
      };
       

    // const handleAddToCart = async () => {

        // const res = await fetch("/api/cart", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         product_id: item._id
        //     })
        // })
        // const result = await res.json()

        // }

        return (
          <div>
      
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
        <button onClick={() => storeCart(item)} className='border-white py-2 px-6 rounded-2xl bg-green-700 text-white' >Add to Cart</button>
    </div>
  )
}
