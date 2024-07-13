'use client'

import { useState } from "react"

export default function Home() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className="mt-16 sm:mt-20 relative bg-black">
        <div className="w-full min-h-64 bg-black flex justify-center items-center">
          <img src="/caraLogo.jpeg" className="h-[200px] hidden lg:block" />
          <img src="/logoSolo.jpeg" />
          <img src="/caraLogo.jpeg" className="h-[200px] hidden md:block" />
        </div>

      </div>
      <div className="flex flex-col justify-center my-32 max-w-3xl mx-auto relative">
        <p className="text-black text-2xl sm:text-3xl md:text-5xl text-center mx-5">
          ¡Hola! Bienvenid@ a nuestro sitio web en donde encontrarás nuestros productos, servicios, ofertas y más
        </p>

        {
          visible &&
          <div className=" overflow-y-auto overflow-x-hidden fixed z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-max max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Redes Sociales
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setVisible(false)}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close</span>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-4 md:p-5 space-x-4 flex">
                  <div className="relative aspect-[9/10] w-16 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-64 sm:rounded-2xl dark:bg-zinc-800">
                    <img
                      src="instagramQR.png"
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </div>
                  <div className="relative aspect-[9/10] w-16 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-64 sm:rounded-2xl dark:bg-zinc-800">
                    <img
                      src="tiktokQR.png"
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </div>
                  <div className="relative aspect-[9/10] w-16 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-64 sm:rounded-2xl dark:bg-zinc-800">
                    <img
                      src="facebookQR.png"
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

        <div className="relative mx-auto bg-[#373739] text-white mt-6 p-3 rounded-lg cursor-pointer" onClick={() => setVisible(true)}>
          <i className="fa fa-share-square-o">  Clic para conocer más</i>
        </div>
      </div>
      <a href="https://api.whatsapp.com/send?phone=5930995421175&text=" className="fixed w-16 h-16 bottom-10 right-10 bg-[#25d366] text-white rounded-[50px] text-center text-3xl z-50" target="_blank">
        <i className="fa fa-whatsapp mt-4"></i>
      </a>
    </>
  )
}