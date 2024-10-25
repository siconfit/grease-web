import HomeButton from "@/components/HomeButton";
import MisionVision from "@/components/MisionVision";
import Valores from "@/components/Valores";

export default function sorbreNosotros() {
  return (
    <>
      <div className="relative mx-auto mt-8 max-w-5xl py-16">
        <div className=" flex flex-col items-center justify-center overflow-hidden sm:overflow-visible">
          <h1 className="text-center text-5xl font-bold text-black sm:text-7xl">
            ¿Quienes somos?
          </h1>
          <div className="mt-16">
            <div className="-my-4 flex justify-center gap-5 py-4 sm:gap-8">
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800">
                <img
                  src="SERVICE1.jpeg"
                  alt="Peluqueria Ibarra"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800">
                <img
                  src="aux1.jpeg"
                  alt="Uñas manos Ibarra"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800">
                <img
                  src="aux2.jpeg"
                  alt="Uñas pies Ibarra"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800">
                <img
                  src="aux3.jpeg"
                  alt="Facial Ibarra"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800">
                <img
                  src="SERVICE5.jpeg"
                  alt="Masajes Ibarra"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mx-10 mt-16 max-w-3xl rounded-[25px] bg-[#373739] p-8 shadow-xl lg:mx-auto ">
            <p className=" text-wrap  text-center text-xl font-bold text-[#c1a161] md:text-2xl lg:text-3xl">
              Somos un equipo visionario emprendedor en el cuidado integral de
              la belleza, estamos convencidos de que los valores esenciales son:
              empatia, responsabilidad, calidad total, lo que buscamos ofrecer
              es satisfacer el deseo imperante de la estetica actual.
            </p>
            <p className=" text-wrap  text-center text-xl font-bold text-[#c1a161] md:text-2xl lg:text-3xl">
              En nuestra cartera de servicios te ofertamos tratmientos de
              belleza para manos y pies, cejas y pestañas, tratamientos
              capilares, masajes y faciales, esto para la poblacion de edades
              entre 5 a 75 años y servicios integrados para la familia.
            </p>
          </div>
        </div>
      </div>
      <MisionVision />
      <Valores />
    </>
  );
}
