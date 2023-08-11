import Image, { StaticImageData } from 'next/image'
import { Image as IImage } from 'sanity';
import AddToCartButton from "@/component/addToCartButton";
import Link from 'next/link'

// import P1 from "/public/Featured1.webp"
// import P2 from "/public/Featured2.webp"
// import P3 from "/public/Featured3.webp"



export default function ProductCard1(props: { title: string, price: number, image: any, item: any }) {
  return (
    <div className=' shadow-lg px-3 py-3 shadow-green-900 rounded min-w-[170px] flex flex-col items-center'>
      
        <Image src={props.image} alt="product" width={300} height={400} className='h-[200px]' />
        <h3 className='font-bold text-lg mt-3'>{props.title}</h3>
        <p className='font-bold text-lg'>${props.price}</p>
        <AddToCartButton item={props.item} />

    </div>
  )
}



