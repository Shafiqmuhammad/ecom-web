"use client"
import React, { FC } from 'react'
import Image from 'next/image'

import { urlForImage } from '../../sanity/lib/image'
import AddToCartButton from '../component/addToCartButton'

export const ProductCard: FC<{ item: any }> = ({ item }) => {

    return (
        <>
            <Image
                height={300}
                width={300}
                className='max-h-[300px]'
                src={urlForImage(item.image).url()} alt="product" />
            <h2 className='text-lg font-bold'>{item.title}</h2>
            <h3 className='text-2xl font-bold'>{item.price}</h3>

            <AddToCartButton item={item} />
        </>
    )
}