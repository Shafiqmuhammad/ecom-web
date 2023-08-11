import Image from 'next/image'
import { client } from './lib/sanityClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '../../sanity/lib/image'
import { ProductCard } from './productCart'
import Hero from '../component/herosection'
import Promotions from '../component/promotions'
import ProductList from './views/ProductList'
import SuccessPage from './success/page'
import Unique from '@/component/Unique'
import CounterView from '@/Counter'
import Newsletter from '@/component/Newsletter'


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


  return (
    <div>
      {/* <Cart /> */}
      <Hero />
      <Promotions />

      
      <div>
        <ProductList />
        <Unique />
        <Newsletter />
        </div>
    </div>
  )
}
