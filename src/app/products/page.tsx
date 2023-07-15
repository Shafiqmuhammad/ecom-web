import { Products1 } from "@/utils/mock";
import { ProductCard } from "../productCart";
import { StaticImageData } from "next/image";

const getProductsByCategory = (category: string) => {
    return Products1.filter((product => product.category === category));
};