import { Products1 } from "@/utils/mock"
import ProductCard1 from "@/app/products1/productCard"
import { StaticImageData } from "next/image"

const getProductsByCategory = (category: string) => {
  return Products1.filter((product) => product.category === category);
}


export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductsByCategory(params.slug);
  
    return <div>My Post: {params.slug}</div>
  }