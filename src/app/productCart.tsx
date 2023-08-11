"use client"
import React, { FC } from 'react'
import Image from 'next/image'

import { urlForImage } from '../../sanity/lib/image'
import AddToCartButton from '../component/addToCartButton'
import Link from 'next/link'

export const ProductCard: FC<{ item: any }> = ({ item }) => {

    return (
        <>
            <div className='shadow-lg px-1 py-3 shadow-green-900 rounded min-w-[170px] '>
            <Link href={'/product-details/'+ item._id}>
                    <Image
                        height={200}
                        width={300}
                        className='h-[200px]'
                        src={urlForImage(item.image).url()} alt="product" />
                    <h2 className='text-lg font-bold'>{item.title}</h2>
                    <div className='text-lg font-bold'>{item.price}</div>

            </Link>
            <AddToCartButton item={item} />
            </div>
        </>
    )
}