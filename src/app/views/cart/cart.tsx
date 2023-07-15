'use client'
import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { urlForImage } from '../../../../sanity/lib/image';

export default function CartComponent() {
    const [cart, setCart] = useState({});
    const [total, setTotal] = useState(0);
    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        const data: any = JSON.parse(window.localStorage.getItem('cart') || "{}");
        setCart(data);
        // console.log(data);
        let totalQuantity = 0;
        let totalPrice = 0;

        for (let itemId in data) {
            totalQuantity += data[itemId].quantity;
            totalPrice += parseFloat(data[itemId].total_price.replace(/\$/g, ""));
        }

        // now set values in state
        setSubTotal(totalPrice);
        setTotal(totalQuantity);

    }, []);

    const handlePay = async () => {
        const payload = {
            cart: {...cart}
        }

        try {
            const response = await fetch('/api/payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
            });
      
            if (response.ok) {
              // Handle successful response
              const data:any = await response.json();
              console.log(data.data);
              window.location.href = data.redirect_url;

            } else {
              // Handle error response
              console.error('Failed to post data');
            }

          } catch (error) {
            // Handle network or request error
            console.error('Error:', error);
          }

        };

    return (
        <div className='flex justify-evenly'>

            {cart && Object.values(cart)?.map((item: any, index: any) => (
                <div key={index}>
                    <div className='flex card'>
                        <div className='pr-6 '>

                            <Image
                                height={100}
                                width={100}
                                className='max-h-[100px]'
                                src={urlForImage(item.image).url()} alt="product" />
                        </div>
                        <div className="mt-1">
                            {item.title} <p>quantity: {item.quantity}</p> price: {item.price} <p> totalPrice: {item.total_price} </p>

                        </div>

                    </div>

                    {/* ${parseFloat(item.price.replace(/\$/g, "")) * parseInt(item.quantity)}  */}
                </div>
            ))}

            <h1>Total Quantity: {total} </h1>
            <h1>SubTotal: ${subTotal} </h1>
            <br />
            <button className='btn bg-green-900 px-9 py-4 text-white rounded-2xl' onClick={()=>{
                handlePay()
            }}>Pay Now ${subTotal}</button>
            
        </div>
    )

}
