"use client"
import { useRouter } from "next/navigation"
import { AiOutlineShoppingCart } from "react-icons/ai";

const StartShopping = () => {
    const router = useRouter();
    return (
        <button
        type="button"
        className="flex items-center bg-[#212121] text-white rounded-none py-3 px-8"
        onClick={() => router.push("")}
        >
        <AiOutlineShoppingCart className="mr-2" size={25} />
        Start Shoping

        </button>
    );
};
export default StartShopping;
