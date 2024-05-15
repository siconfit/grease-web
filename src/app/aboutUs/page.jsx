import Link from "next/link";

export default function aboutUs() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="relative flex flex-col items-center justify-center py-16">
        <h1 className="text-center text-5xl font-bold text-black sm:text-7xl">
          ¿Quienes somos?
        </h1>
        <div className="mt-16">
          <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800">
              <img
                src="SERVICE1.jpeg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800">
              <img
                src="SERVICE2.jpeg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800">
              <img
                src="SERVICE3.jpeg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800">
              <img
                src="SERVICE4.jpeg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800">
              <img
                src="SERVICE5.jpeg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <p className="mx-10 mt-16 max-w-3xl text-wrap rounded-[25px] bg-[#373739] p-8 text-center text-xl font-bold text-[#c1a161] shadow-xl md:text-2xl lg:mx-0 lg:text-3xl">
          Somos Grease Nails Spa & Alta Peluquería, llegamos a la ciudad de
          Ibarra a ofrecerte productos y servicios de alta calidad y que cumplan
          todas las expectativas que tienes, nuestros servicios son para todos
          hombres, mujeres y niños. En nuestra cartera de servicios te ofrecemos
          diseños de cejas, laminados, lifting de pestañas, pestañas pelo a
          pelo, manicura, pedicura, keratina, hidratación, masajes, y muchas
          cosas más para ti.
        </p>
      </div>
    </div>
  );
}
