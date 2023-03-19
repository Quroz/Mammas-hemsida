import React, {useState} from 'react'
import { AiOutlineAlignCenter, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.jpg"
import logos from "../assets/logos.png"
import {Link} from "react-scroll"

function Navbar() {

 const [mobile, setMobile] = useState(false)

  return (
        <div className='w-[90%] bg-[#fbfbf1] mx-auto'>
         <div className='p-2 w-full flex flex-row justify-between items-center md:mx-auto'>
                {/*<div className='flex flex-col items-center font-poppins'>
                    <h1 className='text-2xl text-black'>Ann Wetterdal</h1>
                    <h1 className='text-black text-sm'>Leg.barnmorska</h1>
  </div>*/}
                <img src ={logos} alt = "/" className='object-cover w-[100px] h-[100px] rounded-full'/>
                <ul className='hidden md:flex flex-row gap-16 text-black text-md font-semibold font-poppins '>
                    <li className='cursor-pointer hover:text-gray-400 border-b-[2px] border-transparent hover:border-yellow-500'><Link to="about" spy={true} smooth={true} offset={-50} duration={900}>Om mig</Link></li>
                    <li className='cursor-pointer hover:text-gray-400 border-b-[2px] border-transparent hover:border-yellow-500'><Link to="kbt" spy={true} smooth={true} offset={50} duration={900}>KBT</Link></li>
                    <li className='cursor-pointer hover:text-gray-400 border-b-[2px] border-transparent hover:border-yellow-500'><Link to="emdr" spy={true} smooth={true} offset={50} duration={900}>EMDR</Link></li>
                    <li className='cursor-pointer hover:text-gray-400 border-b-[2px] border-transparent hover:border-yellow-500'><Link to="lsi" spy={true} smooth={true} offset={50} duration={900}>Lifespan Integration</Link></li>
                    <li className='cursor-pointer hover:text-gray-400 border-b-[2px] border-transparent hover:border-yellow-500'><Link to="contact" spy={true} smooth={true} offset={50} duration={900}>Kontakt</Link></li>
                </ul>
                <div className='md:hidden cursor-pointer' onClick = {() => setMobile(!mobile)}>
                    {mobile? <AiOutlineClose size = {30}/> : <AiOutlineAlignCenter size = {30}/>}
                </div>
                    <ul className= {mobile ? 'font-poppins fixed min-h-screen w-full  md:hidden left-0 top-0 flex flex-col gap-20 text-black text-xl items-center py-12 bg-[#f5f5dc] ease-in duration-200 z-20': "absolute left-[-100%] z-20 font-poppins"}>
                        <li className='cursor-pointer hover:text-gray-400 border-b-[2px] border-transparent hover:border-yellow-500'><Link to="about" spy={true} smooth={true} offset={-50} duration={900} onClick = {() => setMobile(!mobile)}>Om mig</Link></li>
                        <li className='cursor-pointer hover:text-gray-400 border-b-[2px] border-transparent hover:border-yellow-500'><Link to="kbt" spy={true} smooth={true} offset={50} duration={900} onClick = {() => setMobile(!mobile)}>KBT</Link></li>
                        <li className='cursor-pointer hover:text-gray-400 border-b-[2px] border-transparent hover:border-yellow-500'><Link to="emdr" spy={true} smooth={true} offset={50} duration={900} onClick = {() => setMobile(!mobile)}>EMDR</Link></li>
                        <li className='cursor-pointer hover:text-gray-400 border-b-[2px] border-transparent hover:border-yellow-500'><Link to="lsi" spy={true} smooth={true} offset={50} duration={900} onClick = {() => setMobile(!mobile)}>Lifespan Integration</Link></li>
                        <li className='cursor-pointer hover:text-gray-400 border-b-[2px] border-transparent hover:border-yellow-500'><Link to="contact" spy={true} smooth={true} offset={50} duration={900} onClick = {() => setMobile(!mobile)}>Kontakt</Link></li>
                        <li className='cursor-pointer hover:text-gray-400 border-b-[2px] border-transparent hover:border-yellow-500'
                        onClick = {() => setMobile(!mobile)}
                        ><AiOutlineClose size = {30}/></li>
                    </ul>
         </div>
        </div>

  )
}

export default Navbar