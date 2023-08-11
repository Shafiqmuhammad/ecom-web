import Image, { StaticImageData } from "next/image"
import P1 from "/public/header.webp"
import ProductCard1 from "../products1/productCard"
import { Products1 } from "@/utils/mock";
import image from "next/image";
import { Image as IImage } from 'sanity'
import { client } from "../lib/sanityClient"; 
import { urlForImage } from "@/../../sanity/lib/image";



const getProductlist = async () => {
    const res = await client.fetch(`*[_type=='product'] {
      price,
        _id,
        title,
        image,
        category -> {
          name
        }
    }[0...3]`)
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



const ProductList = async () => {
    const ProductChecks = await getProductlist();
    return (
        <div className="flex justify-evenly gap-12 mt-16">
            {ProductChecks.map((product:any) => (
                <ProductCard1
                    key={product.id}
                    title={product.name}
                    price={product.price}
                    image={urlForImage(product.image).url()}
                    item={product}                 
                    />
                    
                    ))
                }

            {/* 
            <ProductCard1 title="xyz" price={100} image={P1} />
            <ProductCard1 title="jacket" price={100} image={P1} /> */}

        </div>
    )
}

export default ProductList