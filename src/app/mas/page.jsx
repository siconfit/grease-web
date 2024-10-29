"use client";

import { useState } from "react";

function Mas() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="relative mt-8 bg-black py-16 sm:mt-20">
        <div className="flex min-h-64 w-full items-center justify-center bg-black">
          <img
            src="/caraLogo.webp"
            alt="Emblema Rey y Reina"
            className="hidden h-[200px] lg:block"
          />
          <img
            src="/logoSolo.webp"
            alt="Logo de Grease Nails Spa y Alta Peluqueria"
          />
          <img
            src="/caraLogo.webp"
            alt="Emblema Rey y Reina"
            className="hidden h-[200px] md:block"
          />
        </div>
      </div>
      <div className="relative mx-auto my-16 flex max-w-3xl flex-col justify-center">
        <p className="mx-5 text-center text-2xl text-black sm:text-3xl md:text-5xl">
          ¡Hola! Bienvenid@ a nuestro sitio web en donde encontrarás nuestros
          productos, servicios, ofertas y más
        </p>

        {visible && (
          <div className=" fixed z-50 h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden md:inset-0">
            <div className="relative max-h-full w-full max-w-max p-4">
              <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
                <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Redes Sociales
                  </h3>
                  <button
                    aria-label="social media button"
                    type="button"
                    className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setVisible(false)}
                  >
                    <svg
                      className="h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close</span>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="flex space-x-4 p-4 md:p-5">
                  <div className="relative aspect-[9/10] w-16 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-64 sm:rounded-2xl dark:bg-zinc-800">
                    <img
                      src="instagramQR.png"
                      alt="Instagram QR"
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </div>
                  <div className="relative aspect-[9/10] w-16 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-64 sm:rounded-2xl dark:bg-zinc-800">
                    <img
                      src="tiktokQR.png"
                      alt="TikTok QR"
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </div>
                  <div className="relative aspect-[9/10] w-16 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-64 sm:rounded-2xl dark:bg-zinc-800">
                    <img
                      src="facebookQR.png"
                      alt="Facebook QR"
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          className="relative mx-auto mt-6 cursor-pointer rounded-lg bg-[#373739] p-3 text-white"
          onClick={() => setVisible(true)}
        >
          <i className="fa fa-share-square-o"> Clic para conocer más</i>
        </div>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=5930995421175&text="
        className="fixed bottom-10 right-10 z-50 h-16 w-16 rounded-[50px] bg-[#25d366] text-center text-3xl text-white"
        target="_blank"
      >
        <i className="fa fa-whatsapp mt-4"></i>
      </a>
    </>
  );
}

export default Mas;
