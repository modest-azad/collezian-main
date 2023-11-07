/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [currentState, setState] = useState("hidden");
  const [currentState1, setState1] = useState("hidden");

  const showHide = ()=>{
      if(currentState != "hidden"){
        setState("hidden")
      }
      else { setState("visible")}
      
      console.log("Founder and Developer by instagram @modest_azad")


    }
  const hamburger = ()=>{
      if(currentState1 != "hidden"){
        setState1("hidden")
      }
      else { setState1("visible")}
      
      console.log("Founder and Developer by instagram @modest_azad")

    }
  return (
    <>
<nav className="acrylic w-full center md:px-10 px-4 py-3 outline outline-1 outline-gray-200 ">
    <div className="flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
            <img  src="/logo/Collezian_Official_Logo_DARK.png" className="h-12 mr-3 rounded-full " alt="Logo" />
            {/* <span className=" self-center text-xl font-semibold whitespace-nowrap light:text-gray-900 ">Collezian</span> */}
        </Link>
        <button  data-collapse-toggle="mega-menu-full" type="button" className="inline-flex outline-none items-center p-2 w-10 h-10 justify-center text-sm text-[#050A30] rounded-xl md:hidden light:text-gray-400 light:hover:bg-gray-700 " aria-controls="mega-menu-full" aria-expanded="false" onClick={hamburger} onMouseEnter={hamburger}>
            <span className="sr-only">Open main menu</span>
            <svg id="hambuger" className="w-full h-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        
        <div id="mega-menu-full" className={`"relative items-center justify-between  ${currentState1} w-full md:flex md:w-auto "`}>
            <ul className="flex  flex-col p-5 md:p-0 mt-4  max-sm:rounded-3xl  md:flex-row md:space-x-8 md:mt-0  ">
                <li className="max-sm:flex max-sm:justify-center">
                    <Link href="/" className="block py-2 pl-3 pr-4 text-gray-500 rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-blue-500 md:light:hover:bg-transparent light:border-gray-700" aria-current="page">
                        Home
                    </Link>
                </li>
                {/* <li  className="max-sm:flex max-sm:justify-center">
                    <span>
                    <button  id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-500 rounded-xl md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-blue-500 md:light:hover:bg-transparent light:border-gray-700"
                    onClick={showHide}
                    >Studying<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
  </svg></button></span>
                </li> */}
               <li className="max-sm:flex max-sm:justify-center">
                    <Link href="/Engineering" className="block py-2 pl-3 pr-4 text-gray-500  rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-blue-500 md:light:hover:bg-transparent light:border-gray-700">
                        Engineering</Link>
                </li>
                <li className="max-sm:flex max-sm:justify-center">
                    <Link href="https://chat.whatsapp.com/DPyHjemxvt17fbhSFMIVYw" className="block py-2 pl-3 pr-4 text-gray-500  rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-blue-500 md:light:hover:bg-transparent light:border-gray-700">
                        Career</Link>
                </li>
                <li className="max-sm:flex max-sm:justify-center">
                    <Link href="#" className="flex py-2 pl-3 pr-4 text-gray-500  rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-blue-500 md:light:hover:bg-transparent light:border-gray-700"> 
                        Results <div className="bg-red-700 animate-pulse ml-2 w-1 h-1 rounded-3xl">{""}</div>
                    </Link>
                </li>
                
                <li className="max-sm:pt-4 max-sm:flex max-sm:justify-center">
                  {/* Action button  */}
            <Link  href="/contribution" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl "> Contribute </Link>
                </li>
            </ul>
        </div>
        
    </div>
   
</nav>
 {/* Mega DropDown Menu For all branch */}
 {/* <div id="mega-menu-full-dropdown" className={`" ${currentState}  z-50 py-5 mt-2 sticky top-0  w-full rounded-3xl acrylic border-gray-200 shadow-sm border-y light:bg-gray-800 light:border-gray-600"`} onClick={hamburger} >
        <div className="grid px-4 py-5 mx-auto  text-gray-900  sm:grid-cols-2 ">
            <ul>
                <li onClick={showHide} >
                    <Link href="/branch/cse/" className="block p-3 px-7 rounded-3xl transition-all duration-300 ease-in-out hover:bg-blue-100 light:hover:bg-gray-700">
                        <div className="font-semibold ">Computer Science and Engineering (CSE)</div>
                        <span className="text-sm text-gray-900 light:text-gray-400">Notes, Books, Question Bank, Assignments etc.</span>
                    </Link>
                </li>
                <li onClick={showHide}>
                    <Link href="/branch/ee" className="block p-3 px-7 transition-all duration-300 ease-in-out rounded-3xl hover:bg-blue-100 light:hover:bg-gray-700">
                        <div className="font-semibold">Electrical Engineering (EE)</div>
                        <span className="text-sm text-gray-900 light:text-gray-400">Coming soon...</span>
                    </Link>
                </li >
                <li onClick={showHide}>
                    <Link href="/branch/ece" className="block p-3 px-7 transition-all duration-300 ease-in-out rounded-3xl hover:bg-blue-100 light:hover:bg-gray-700">
                        <div className="font-semibold">Electronics and Communication Engineering (ECE)</div>
                        <span className="text-sm text-gray-900 light:text-gray-400">Coming soon...</span>
                    </Link>
                </li>
            </ul>
            <ul>
                <li onClick={showHide}>
                    <Link href="/branch/civil" className="block p-3 px-7 rounded-3xl transition-all duration-300 ease-in-out hover:bg-blue-100 light:hover:bg-gray-700">
                        <div className="font-semibold">Civil Engineering (CE)</div>
                        <span className="text-sm text-gray-900 light:text-gray-400">Coming soon...</span>
                    </Link>
                </li>
                <li onClick={showHide}>
                    <Link href="/branch/me" className="block p-3 px-7 rounded-3xl transition-all duration-300 ease-in-out hover:bg-blue-100 light:hover:bg-gray-700">
                        <div className="font-semibold">Mechanical Engineering (ME)</div>
                        <span className="text-sm text-gray-900 light:text-gray-400">Coming soon...</span>
                    </Link>
                </li>
                <li onClick={showHide}>
                    <Link href="/branch/eee" className="block p-3 px-7 rounded-3xl transition-all duration-300 ease-in-out hover:bg-blue-100 light:hover:bg-gray-700">
                        <div className="font-semibold">Electrical and Electronics Engineering (EEE)</div>
                        <span className="text-sm text-gray-900 light:text-gray-400">Coming soon...</span>
                    </Link>
                </li>
                <li onClick={showHide}>
                    <Link href="/branch/bca" className="block p-3 px-7 rounded-3xl transition-all duration-300 ease-in-out hover:bg-blue-100 light:hover:bg-gray-700">
                        <div className="font-semibold">Bachelor in Computer Application (BCA)</div>
                        <span className="text-sm text-gray-900 light:text-gray-400">Coming soon...</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div> */}
    
    </>
  );
}
