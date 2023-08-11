'use client'
import React, {useEffect, useState} from 'react'
import { Image as IImage } from 'sanity'
import Image from 'next/image'
import { urlForImage } from '@/../../sanity/lib/image'
import AddToCartButton from '@/component/addToCartButton'

const Details = ({itemData}:any) => {
    const [item, setItem] = useState<any>()
    useEffect(()=>{
        let data = JSON.parse(window.localStorage.getItem('cart') || '{}');
        if (data[itemData._id]) {
            setItem(data[itemData._id]);
        }else{
            setItem(itemData);
        }

    },[itemData])

    const increment = (item:any) => {
        console.log('+++')
        let data = JSON.parse(window.localStorage.getItem('cart') || '{}');
        const id:any = item._id;
    
        if (data[id]) {
          data[id] = { ...data[id], quantity: data[id].quantity + 1,  total_price: "$" + parseFloat(data[id].price.replace(/\$/g, "")) * parseInt(data[id].quantity + 1) };
        } else {
          data[id] = { ...item, ...{quantity: 1, total_price: item.price} };
        }
    
        window.localStorage.setItem('cart', JSON.stringify(data));
        setItem((prev:any)=>{
          return {...prev, ...data[id]}
        })
      };

    const decrement = (item:any) => {
        let data = JSON.parse(window.localStorage.getItem('cart') || '{}');
        const id:any = item._id;

        if (data[id] && (data[id].quantity > 0) ) {
          data[id] = { ...data[id], quantity: data[id].quantity - 1,  total_price: "$" + parseFloat(data[id].price.replace(/\$/g, "")) * parseInt(data[id].quantity + 1) };
        } else {
            delete data[id];
        }
    
        window.localStorage.setItem('cart', JSON.stringify(data));
        setItem((prev:any)=>{
          return {...prev, ...data[id]}
        })
      };
      console.log(item)
  return (
    <div className=''>
    <div className="grid grid-rows-1 sm:grid-rows-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="mb-10">
        {item && <Image
            height={400}
            width={300}
            className='shadow-lg px-3 py-3 shadow-green-900 rounded min-w-[170px] '
            src={urlForImage(item.image).url()} alt="product" />}

      </div>
      <div className="mb-10">
        <h2 className='text-4xl font-bold'>{item?.title}</h2>
        <div className='text-lg'>{item?.price}</div> 
        <div className="mt-10 flex">
        {item && (item?.quantity>0) &&
            <div className='flex rounded-2xl bg-green-800 opacity-70 text-white py-2 px-4 mt-6 select-none'>
                <button className='' type="button" onClick={()=>increment(item)}> +</button>
                <div className='px-7'>{item.quantity}</div>
                <button type="button" onClick={()=>decrement(item)}> -</button>
            </div>}
            {(!item?.quantity || item?.quantity<1) && <AddToCartButton item={item} setItem={setItem} /> }
            
        </div>
      </div>
    </div>
      
   </div>  )
}

export default Details