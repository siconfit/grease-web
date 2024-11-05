"use client";

import { useState } from "react";

export default function SocialMediaCard() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div class="fixed z-50 flex h-screen items-center justify-center">
        <div class="rounded-lg border bg-indigo-800 p-10 font-bold text-white shadow-lg">
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
    </>
  );
}
