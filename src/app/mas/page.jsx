"use client";
import { useState } from "react";
const datos = require("@/mockups/products.json");

function Mas() {
  return (
    <section
      class="relative mx-auto flex h-[32rem] w-full max-w-[1600px] rounded-2xl bg-red-200 bg-contain bg-center bg-no-repeat pt-12 md:items-center md:pt-0"
      style={{
        backgroundImage: `url('${datos[0].image}')`,
      }}
    >
      <div class="container mx-auto">
        <div class="flex w-full flex-col items-start justify-center px-6  tracking-wide lg:w-1/2">
          <h1 class="my-4 text-2xl text-black">
            Stripy Zig Zag Jigsaw Pillow and Duvet Set
          </h1>
          <a
            class="inline-block border-b border-gray-600 text-xl leading-relaxed no-underline hover:border-black hover:text-black"
            href="#"
          >
            products
          </a>
        </div>
      </div>
    </section>
  );
}

export default Mas;
