"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const navigation = [
  { name: "¿Quienes somos?", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Tienda Grease", href: "/productos" },
];

export default function SimpleHeader() {
  const router = usePathname();
  const [isOpen, setOpen] = useState(false);

  return (
    <div as="nav" className="fixed top-0 z-10 w-full bg-[#373739]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              aria-label="header button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setOpen(!isOpen)}
            >
              <svg
                className="h-8 w-8 text-[#f0f0f0]"
                data-slot="icon"
                fill="currentColor"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {!isOpen ? (
                  <path d="M2 2.75A.75.75 0 0 1 2.75 2h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 2.75Zm0 10.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75ZM2 6.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.25Zm0 3.5A.75.75 0 0 1 2.75 9h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75Z" />
                ) : (
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                )}
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href={"/"}>
                <img
                  alt="Your Company"
                  src="/caraLogo-removebg.png"
                  className="h-8 w-auto transform transition-transform duration-700 hover:scale-125"
                />
              </Link>
            </div>

            {/* navegacion web se muestra hasta que la pantalla sea pequeña */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={router === item.href ? "page" : undefined}
                    className={
                      router === item.href
                        ? "block rounded-md bg-[#19191A] px-3 py-2 text-base font-medium text-[#c1a161]"
                        : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#c1a161] hover:text-[#373739]"
                    }
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              https://maps.app.goo.gl/CK9TJPJC3wG2FNfU9
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden">
        {isOpen && (
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={
                  item.current
                    ? "block rounded-md bg-[#19191A] px-3 py-2 text-base font-medium text-[#c1a161]"
                    : "block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#c1a161] hover:text-[#373739]"
                }
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
