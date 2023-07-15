// 'use client';
// import { cookies } from 'next/dist/client/components/headers'
import React from 'react'
import CartComponent from './cart';

const Cart = async () => {
  // let user_id = cookies().get("user_id")?.value || null;
  // let data:any = [];
  // if (user_id) {

  //   await fetch(`http://localhost:3000/api/cart?user_id=${user_id}`)
  //   .then((response) => {
  //     return response.json();

  //   })
  //   .then((resp) => {
  //     data = resp;
  //     console.log(data)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   });

  // }

  // const data:any = JSON.parse(window.localStorage.get('cart') || "[]");

  return (
    <div>
      <h1>Cart</h1>
      <CartComponent />
    </div>
  )
}

export default Cart;