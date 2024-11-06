import Carousel from "@/components/Carousel";

export default function Pruebas() {
  return (
    <div className="relative bg-red-300 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 overflow-y-hidden overflow-x-scroll whitespace-nowrap bg-yellow-200 px-4 py-6 text-black sm:gap-0 sm:overflow-x-hidden">
        <a href="" className="hover:underline">
          Cabello
        </a>
        <a href="" className="hover:underline">
          Maquillaje
        </a>
        <a href="" className="hover:underline">
          Cuidado de la piel
        </a>
        <a href="" className="hover:underline">
          Uñas
        </a>
        <a href="" className="hover:underline">
          Hombres
        </a>
      </div>
      <Carousel />
    </div>
  );
}
