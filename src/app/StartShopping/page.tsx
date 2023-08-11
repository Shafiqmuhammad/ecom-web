import React from 'react'
import { ProductCard } from '@/app/productCart' 
import { client } from '@/app/lib/sanityClient' 
import { Image as IImage } from 'sanity'


const getProductData = async (category:any=undefined) => {
    if(category){
      const res = await client.fetch(`*[_type=='product' && category->category == "${category}"] { price,_id,title,image, category->{category} }`)
      return res
    }else{
      const res = await client.fetch(`*[_type=='product'] { price,_id,title,image, category->{category} }`)
      return res
    }

  }
  
  interface IProduct {
    title: string,
    _id: string,
    description: string,
    image: IImage,
    price: number,
    category: {
      name: string
    }
  }
  
export default async function StartShopping({searchParams}:any) {
    const {category}=searchParams;
    const data: IProduct[] = await getProductData(category)
    return (
      <div>

        <div id="shopnow" className='flex justify-evenly flex-wrap gap-12 text-center mt-9'>
  
          {data?.map((item, index) => (
            <div key={index} className='flex flex-col  justify-evenly'>
              <ProductCard item={item} />
            </div>
  
  
          ))}
          
  
        </div>

      </div>
    )
  }
