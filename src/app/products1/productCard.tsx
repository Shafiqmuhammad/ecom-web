import Image, { StaticImageData } from 'next/image'
import { Image as IImage } from 'sanity';

import P1 from "/public/Featured1.webp"
import P2 from "/public/Featured2.webp"
import P3 from "/public/Featured3.webp"



export default function ProductCard1 (props: { title: string, price: number, image: StaticImageData }) {
  return (
    <div>
      
        <Image src={props.image} alt="product" />
        <h3 className='font-bold text-lg mt-3'>{props.title}</h3>
        <p className='font-bold text-lg'>${props.price}</p>

    </div>
  )
}



