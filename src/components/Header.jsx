"use client";
import { useState } from "react";
import Link from "next/link";
import HomeButton from "./HomeButton";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="relative bg-[#eedfc5] shadow">
      <nav className=" flex h-auto items-center justify-center lg:h-16">
        <ul className=" hidden space-x-4 font-bold lg:flex">
          <li className="rounded-full bg-[#19191A] px-5 py-2 text-[#c1a161] hover:bg-[#c1a161] hover:text-[#19191a]">
            <Link href="/nosotros">¿Quienes somos?</Link>
          </li>
          <li className="rounded-full bg-[#19191A] px-5 py-2 text-[#c1a161] hover:bg-[#c1a161] hover:text-[#19191a]">
            <Link href="/servicios">Servicios</Link>
          </li>
          <li className="rounded-full bg-[#19191A] px-5 py-2 text-[#c1a161] hover:bg-[#c1a161] hover:text-[#19191a]">
            <Link href="/productos">Tienda Grease</Link>
          </li>
        </ul>

        <div className="flex flex-col items-center justify-center space-y-3 py-5 lg:hidden">
          <button aria-label="header button" onClick={() => setOpen(!isOpen)}>
            <svg
              className="h-8 w-8 text-[#19191a]"
              data-slot="icon"
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 2.75A.75.75 0 0 1 2.75 2h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 2.75Zm0 10.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75ZM2 6.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.25Zm0 3.5A.75.75 0 0 1 2.75 9h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75Z"
              ></path>
            </svg>
          </button>
          {isOpen && (
            <>
              <ul className="space-y-4 font-bold">
                <li className="rounded-full bg-[#19191A] px-5 py-2 text-[#c1a161] hover:bg-[#c1a161] hover:text-[#19191a]">
                  <Link href="/nosotros">¿Quienes somos?</Link>
                </li>
                <li className="rounded-full bg-[#19191A] px-5 py-2 text-[#c1a161] hover:bg-[#c1a161] hover:text-[#19191a]">
                  <Link href="/servicios">Servicios</Link>
                </li>
                <li className="rounded-full bg-[#19191A] px-5 py-2 text-[#c1a161] hover:bg-[#c1a161] hover:text-[#19191a]">
                  <Link href="/productos">Tienda Grease</Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
