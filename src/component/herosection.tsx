import Image from 'next/image';
import React from 'react';
import { LuShoppingCart } from "react-icons/lu";
import imgHero from "/public/header.webp"
import featured1 from "public/assets/featured1.png"
import featured2 from "public/assets/featured2.png"
import featured3 from "public/assets/featured3.png"
import featured4 from "public/assets/featured4.png"
import StartShopping from '../app/StartShopping/page';
import Link from 'next/link';
const Hero = () =>{
    return (
        <section className='flex flex-col gap-y-10 lg:flex-row md:flex-row py-8'>
            {/* LEFT DIV */}
            <div className='flex-1'>
            <span className="bg-green-700  text-lg font-bold py-2 px-2 mt-2  rounded dark:bg-gray-700 dark:text-orange-300 text-white border border-white">Sale 70%</span> 
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6 text-green-900'>
                Oline Fashion... Road Mall <p className='text-white'>looks for men, women and kids</p>
            </h1>
            <p className='leading-7 [&:not(:first-child)]:mt-6 text-justify pr-8'>
            This is your leading online shopping website for fast, reliable, and simple online shopping.
            Whether you're looking for workwear basics, cooler-than-cool streetwear, elegant classics, sharp suits, off-duty staples, glamorous eveningwear,
             adorable kids' outfits or seasonal trends from your favourite brands, we've got you covered.
            </p>
            {/* <StartShopping /> */}

            <Link href={"/StartShopping"} >

            <button className='flex items-center justify-center rounded-2xl text-white bg-green-700 py-3 px-4 mt-4 shadow '
            
            type="button" > 
            <LuShoppingCart className='mx-2 text-white' />
            Start Shopping
                </button>
                </Link>
                <div className='flex gap-10 pl-5 py-5 justify-start'>
                <Image src={featured1} width={100} height={35} alt='img' />
                <Image src={featured2} width={100} height={35} alt='img' />
                <Image src={featured3} width={100} height={35} alt='img' />
                <Image src={featured4} width={100} height={35} alt='img' />
            </div> 
</div>            





            {/* RIGHT DIV */}
            <div className="  w-[600px] h-[600px] md:w-[450px] md:h-[450px] bg-green-700   rounded-full  ">
        <Image src={imgHero} className='lg:w-[500px] lg:h-[500px] mt-[-20px]' width={650} height={650} alt={'Home Page Image'} />

        </div>

             </section>
             
    )
}

export default Hero
