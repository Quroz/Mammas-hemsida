import React from 'react'
import person from "../assets/test.jpeg"
import mamma from "../assets/mammasHemsida.jpeg"
import mammaStartsida from "../assets/mammaStartsida.jpeg"
import gravid from "../assets/gravid.jpeg"
import trauma from "../assets/trauma.webp"
import stöd from "../assets/stöd.jpeg"
import sten from "../assets/sten.jpeg"
import {Link} from "react-scroll"
import { FiBox } from "react-icons/fi";


function StartPage() {
  return (
    <div className='min-h-screen bg-[#fbfbf1] flex flex-col w-[90%] mx-auto'>
        <div>
             <div className='flex flex-col justify-center items-center md:items-start absolute w-full h-[600px] pl-12'>
                    <div className='flex flex-col my-4 text-center mr-16 gap-4 text-white'>
                        <h1 className='text-5xl font-thin text-center font-poppins'>Ann Wetterdal</h1>
                        <div>
                            <h1 className='text-3xl font-poppins'>Samtalsterapeut och Leg. barnmorska</h1>
                            <h1 className='text-xl font-medium text-center font-poppins' >KBT, Lifespan integration och EMDR</h1>
                        </div>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={900}><button className='py-2 bg-[#002D62] w-[40%] mx-auto rounded-md hover:bg-blue-800 font-poppins '>Kontakta mig</button></Link>
                    </div>
              </div>
              <img src = {sten} alt = "/" className='object-cover w-full h-[600px] '/>
              {/*<div className='w-full h-[600px] bg-gray-500'/>*/}
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center w-full py-20 min-h-[700px] max-w-[1300px]'>
            <div>
                 <img src = {mammaStartsida} alt = "/" className='object-cover rounded-md max-h-[641px] object-top w-[490px]'/>
            </div>
            <div className='flex flex-col gap-8 font-poppins w-full lg:w-[50%] mr-12 overflow-hidden mx-auto md:mx-0' id = "about">
                <h1 className='text-4xl text-center mt-7'>Ann Wetterdal</h1>
                <div className='h-[1px] w-full bg-black'/>
                <h2 className='text-2xl text-center'>Samtalsterapeut och leg.barnmorska</h2>
                <div className='text-gray-700'>
                    <p className='text-md md:text-xl'>
                            Jag är leg barnmorska, KBT steg 1 terapeut , Lifespan integration och EMDR terapeut.

                            Jag har lång erfarenhet av terapeutiska samtal vid ångest, nedstämdhet, barndomstrauma, relationstrauma och annan typ av trauma.
                            Jag arbetar även för WONSA (World of no sexuell abuse) med traumaterapi för kvinnor som varit utsatta för sexuellt våld.
                    </p>
                    <p className='text-md md:text-xl mt-4'>
              

                            Jag har under många år arbetat med gravida kvinnor/par som har haft en stark rädsla för att föda barn, har haft psykisk ohälsa och orostankar runt anknytningen till de väntade barnet. Tankar om relationen och tankar om hur föräldraskapet kommer att påverkas av egna barndomsupplevelser. Jag har även arbetat med kvinnor som har haft en svår förlossningsupplevelse.

                    

                    </p> 

                <p className='mt-5 text-md md:text-xl'>

                    Jag arbetar med tekniker från traumaanpassad yoga.

                    Det vi samtalar om under terapin är självklart under sekretess.
                </p>
               </div>
            </div>

        </div>
    </div>

 
)}

export default StartPage
