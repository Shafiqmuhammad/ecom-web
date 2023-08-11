import Link from "next/link";
import logo from "public/assets/Logo.png";
import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";
import SearchInput from "./input";
import CartIcon from "./cartIcon";


const Header = () => {
    return (
        <div className=" flex justify-between items-center px-9 py-6">
            <Link href={"/"}>
                <Image src={logo} alt={"logo"} />
            </Link>

            <ul className="flex gap-x-20">
                <li className="text-lg">
                    <Link href={"/StartShopping?category=Female"}>Female </Link>
                </li>

                <li className="text-lg">
                    <Link href={"/StartShopping?category=Male"}>Male </Link>
                </li>

                <li className="text-lg">
                    <Link href={"/StartShopping?category=Kids"}>Kids </Link>
                </li>

                <li className="text-lg">
                    <Link href={"/StartShopping"}>All Products </Link>
                </li>
            </ul>

            <SearchInput />
            <CartIcon />

        </div>
    );
};
export default Header;