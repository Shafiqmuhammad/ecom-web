import Image from 'next/image'
import { client } from './lib/sanityClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '../../sanity/lib/image'
import { ProductCard } from './productCart'
import Hero from '../component/herosection'
import Promotions from '../component/promotions'
import ProductList from './views/ProductList'
import SuccessPage from './success/page'

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=='product'] {
    price,
      _id,
      title,
      image,
      category -> {
        name
      }
  }`)
  return res
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

export default async function Home() {

  const data: IProduct[] = await getProductData()

  return (
    <div>
      {/* <Cart /> */}
      <Hero />
      <Promotions />

      <div id="shopnow" className='flex justify-evenly  gap-x-12 text-center'>

        {data.map((item, index) => (
          <div key={index}>
            <ProductCard item={item} />
          </div>


        ))}
        

      </div>
      <div>
        <ProductList />
        <SuccessPage />
        </div>
    </div>
  )
}
