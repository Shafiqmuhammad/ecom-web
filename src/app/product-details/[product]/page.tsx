
import React from 'react'
import { client } from '@/app/lib/sanityClient'
// import { Image as IImage } from 'sanity'
import Details from './details'

export const getProduct = async (product:string) => {
    const res = await client.fetch(`*[_type=='product' && _id=='${product}'] {price,_id,title,image,category -> {name}}`)
    return res
  }
  
  // interface IProduct {
  //   title: string,
  //   _id: string,
  //   description: string,
  //   image: IImage,
  //   price: number,
  //   category: {
  //     name: string
  //   }
  // }

const Product = async ({params, searchParams}: any) => {
    const {product} = params;
      const item:any = await getProduct(product)
      
  return (
    <>
    <Details itemData={item[0]} />
    </>
  )

}

export default Product