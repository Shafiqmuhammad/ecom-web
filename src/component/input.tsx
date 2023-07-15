import { LuSearch } from "react-icons/lu";
export default function SearchInput(){
    return (
        <>
{/* 
<div className=" h-[30px] rounded-md border flex justify-center items-center ">
        <LuSearch className="w-4 h-4 ml-2" />
        <input type="text" placeholder="What you looking for" name="" id=""></input>
        </div> */}


    
    <div className="relative">
        <div className="absolute inset-y-0 left-0  flex items-center pl-3 pointer-events-none">
            
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-orange-500 focus:border-orange-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What you looking for?" required /> 
        
    </div>


     
        </>
    )
}