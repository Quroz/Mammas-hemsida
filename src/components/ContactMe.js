import React from 'react'
import mamma from "../assets/mammaKontakt.jpeg"

function ContactMe() {
  return (
    <div className='w-[90%] py-16 flex flex-col mx-auto gap-12 text-gray-700' id = "contact">
            <h1 className='text-4xl font-poppins text-center text-black'>Kontakt</h1>
            <div className='grid md:grid-cols-2 grid-rows-none items-center'>
              <img src = {mamma} alt = "/" className='object-cover rounded-md max-h-[500px] object-top w-[490px] mx-auto'/>
              <div className='w-full flex items-start flex-col my-20 gap-4 ml-4 lg:ml-4'>
                  <p className='font-poppins text-xl md:text-2xl'>Välkommen till mig på Artillerigatan 28 på Östermalm</p>
                  <p className='font-poppins text-xl md:text-2xl'>Om du vill boka tid eller har några funderingar, kontakta mig på: 07390819936 (helst sms) eller
                      via mail på kontakt@annwetterdalterapi.se
                  </p>
              </div>
            </div>

    </div>
  )
}

export default ContactMe