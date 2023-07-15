'use client'
import Wrapper from "@/wrapper";
import {useEffect} from "react"

const SuccessPage = () => {
  useEffect(()=>{
    window.localStorage.removeItem('cart')
  },[])
  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-center w-full mt-20 gap-5 text-green-900">
        <p className="text-[#e9ebe9] font-bold text-9xl leading-[200px] w-52 h-52 text-center rounded-full bg-green-900">
          ✓
        </p>
        <h1>Success</h1>
        <p className="text-center text-2xl">
          We received your purchase request,
          <br /> we&apos;ll be in touch shortly!
        </p>
      </div>
    </Wrapper>
  );
};
export default SuccessPage;
