"use client";
import { useState } from "react";
const DATA = [
  {
    image:
      "https://dmujeresec.vtexassets.com/assets/vtex.file-manager-graphql/images/c2f056ec-dcb5-471d-9854-00f463928af2___8c2481d0aa2b66674572781271a72e15.jpg",
    title: "El elixir de la belleza capilar",
    subtitlte: "Nutricion y brillo natural al instante",
    color: "#F0920E",
  },
  {
    image:
      "https://dmujeresec.vtexassets.com/assets/vtex.file-manager-graphql/images/e325aea9-3ebb-466b-9582-f1d2c151e417___7fd421d80149669b496ff963e2279810.jpg",
    title: "Una nueva era de pestañas empezo",
    subtitlte: "Efecto multidimensional de alto impacto con Flormar",
    color: "#FFBAE8",
  },
  {
    image:
      "https://dmujeresec.vtexassets.com/assets/vtex.file-manager-graphql/images/8805bd35-8bfb-4671-95f9-5959a51f71f1___4d8de7e01cc401ee6bf59bdd997899da.jpg",
    title: "¡Una sorpresa ilumina cada dia!",
    subtitlte: "Beauty advent calendar 2024",
    color: "#0F2F2A",
  },
];

export default function Carousel() {
  const [imagePosition, setImagePosition] = useState(0);

  const moveRight = () => {
    setImagePosition((prevPosition) => (prevPosition + 1) % DATA.length);
  };

  const moveLeft = () => {
    setImagePosition(
      (prevPosition) => (prevPosition - 1 + DATA.length) % DATA.length,
    );
  };

  return (
    <>
      <div className="mx-auto mt-2 flex h-auto max-w-5xl bg-[#eedfc5]">
        <div className="flex h-full w-full flex-col bg-gray-200">
          <div className="relative flex items-center justify-center">
            <button
              className="absolute left-2 top-1/2 block rounded-full bg-gray-200 p-2 text-black"
              onClick={() => moveLeft()}
            >
              <div>{"<"}</div>
            </button>
            <img
              src={DATA[imagePosition].image}
              alt="Promociones Grease"
              className="h-full w-auto overflow-hidden bg-gray-200 object-contain transition-all duration-500 hover:scale-95 hover:shadow-2xl hover:shadow-black sm:h-96 md:h-[500px]"
            />
            <button
              className="absolute right-2 top-1/2 block rounded-full bg-gray-200 p-2 text-black"
              onClick={() => moveRight()}
            >
              <div>{">"}</div>
            </button>
          </div>

          <div
            style={{ backgroundColor: DATA[imagePosition].color }}
            className="p-4 text-white"
          >
            <h1 className="text-2xl font-bold">{DATA[imagePosition].title}</h1>
            <p>{DATA[imagePosition].subtitlte}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-5xl bg-gray-100 p-5 text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veniam
        tempora beatae? Corporis, impedit. Amet iste quam enim porro sint ipsum,
        accusantium assumenda temporibus pariatur eaque in ratione!
        Necessitatibus, voluptatibus.
      </div>
    </>
  );
}
