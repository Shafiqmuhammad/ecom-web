import Image from "next/image"
import P1 from "/public/header.webp"
import ProductCard1 from "../products1/productCard"
import { Products1 } from "@/utils/mock";





const ProductList = ()=> {
    const ProductChecks = Products1.slice(0, 4);
    return (
        <div className="flex justify-evenly mt-16">
        {ProductChecks.map((product) => (
            <ProductCard1 
            key={product.id} 
            title={product.name} 
            price={product.price}
            image={P1} />
        ))
        }

            {/* 
            <ProductCard1 title="xyz" price={100} image={P1} />
            <ProductCard1 title="jacket" price={100} image={P1} /> */}

        </div>
    )
}

export default ProductList