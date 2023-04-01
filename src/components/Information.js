import React from 'react'
import gravid from "../assets/gravid.jpeg"
import trauma from "../assets/trauma.webp"
import trauma2 from "../assets/trauma2.jpeg"
import stöd from "../assets/stöd.jpeg"
import stoed from "../assets/stoed.jpeg"


function Information() {
  return (
    <div className='flex flex-col flex-1 w-[90%] h-full font-poppins  mx-auto justify-between'>
    
    
    <div className='w-full h-full grid md:grid-cols-3 grid-rows-none  justify-items-between py-20 px-8 gap-4 '>
    
    
        <div className='flex flex-col items-center'>
            <h1 className='text-center text-2xl lg:text-4xl font-thin text-black font-poppins'>Trauma</h1>
            <img src = {trauma2} alt = "/" className='object-cover w-full h-[300px] rounded-md mt-4'/>
            <div className='flex flex-col  p-4 max-w-[400px] my-2 overflow-clip pt-3'>
                <div className='flex flex-col my-4 text-black font-poppins mx-auto'>
                    <h1 className='text-md md:text-xl text-gray-800'>-Du som har varit med om en svår förlossning</h1>
                    <h1 className='text-md md:text-xl text-gray-800'>-Du har blivit utsatt för sexuella övergrepp</h1>
                    <h1 className='text-md md:text-xl text-gray-800'>-Du har uppväxttrauma</h1>
                    <h1 className='text-md md:text-xl text-gray-800'>-Du är eller har varit i relationer med fysiskt och/eller fysiskt våld</h1>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center'>
            <h1 className='text-center text-2xl lg:text-4xl font-thin text-black font-poppins'>Terapi</h1>
            <img src = {stoed} alt = "/" className='object-cover w-full h-[300px] rounded-md mt-4'/>
            <div className='flex flex-col  p-4 max-w-[400px] my-2 overflow-clip pt-3'>
                <div className='flex flex-col my-4 font-poppins'>
                    <h1 className='text-md md:text-xl text-gray-800'>-Du känner dig nedstämd och/eller ångest</h1>
                    <h1 className='text-md md:text-xl text-gray-800'>-Du har låg självkänsla</h1>
                    <h1 className='text-md md:text-xl text-gray-800'>-Du behöver stöd i livsförändringar</h1>
                    <h1 className='text-md md:text-xl text-gray-800'>-Du behöver någon att prata med</h1>
                </div>
            </div>
        </div>  

        <div className='flex flex-col items-center'>
            <h1 className='text-center text-2xl lg:text-4xl font-thin text-black font-poppins'>Gravid/föräldraskap</h1>
            <img src = {gravid} alt = "/" className='object-cover w-full h-[300px] rounded-md mt-4'/>
            <div className='flex flex-col  p-4 max-w-[400px] my-2 overflow-clip pt-3 mx-auto'>
                <div className='flex flex-col my-4 text-black font-poppins'>
                    <h1 className='text-md md:text-xl text-gray-800'>-Du har en rädsla för förlossningen</h1>
                    <h1 className='text-md md:text-xl text-gray-800'>-Du har orostankar runt anknytningen till ditt barn</h1>
                    <h1 className='text-md md:text-xl text-gray-800'>-Du har tankar om relationen till dig själv och till andra</h1>
                    <h1 className='text-md md:text-xl text-gray-800'>-Du känner dig nedstämd och/eller har ångest</h1>
                </div>
            </div>
        </div>
</div>
</div>
  )
}

export default Information