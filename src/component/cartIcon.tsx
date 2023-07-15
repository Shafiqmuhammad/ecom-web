'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { LuShoppingCart } from 'react-icons/lu'

const CartIcon = () => {
    const [count, setCount] = useState(0);
    useEffect(() =>{
        const data: any = JSON.parse(window.localStorage.getItem('cart') || "{}");
        let totalQuantity = 0;
        for (let itemId in data) {
            totalQuantity += data[itemId].quantity;
        }

        setCount(totalQuantity)
    },[]);

    return (
        <div>
            <Link href={"/views/cart"}>
                <div className="w-[30px] h-[30px] rounded-full bg-green-700 flex justify-center items-center relative ">
                    <span className="absolute right-1 top-0 rounded-full bg-red-500 h-3 w-3 text-white text-sm text-center">{count}</span>
                    <LuShoppingCart className="w-4 h-4 text-white" />
                </div>
            </Link>
        </div>
    )
}

export default CartIcon