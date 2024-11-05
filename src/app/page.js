import Ranking from "@/components/Ranking"

export default function Home() {
  return (
    <section className="relative px-4 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl py-16 lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col items-center justify-center lg:col-span-6 lg:items-start">
          <div>
            <span className="inline-block rounded-full bg-[#c1a161] px-4 py-2 font-medium text-[#373739] shadow-md">
              Bienvenido a Grease
            </span>
          </div>
          <h1 className="mt-5 text-center text-4xl text-[#373739] sm:text-5xl lg:max-w-none lg:text-left lg:text-6xl">
            Relajate, renueva, resplancede
          </h1>
          <p className="mt-3 max-w-2xl text-center text-xl text-[#373739] lg:text-left">
            Tu oasis de tranquilidad y rejuvenecimiento. Deja que nuestros
            expertos te guíen hacia un estado de bienestar total, donde cada
            visita es una experiencia única y revitalizante.
          </p>
          <div className="mt-8 flex flex-col items-center overflow-hidden sm:flex-row">
            <a
              className="group relative inline-flex items-center justify-center rounded-full bg-[#c1a161] px-8 py-3 text-xl font-medium text-[#373739] transition-colors duration-300 hover:bg-[#373739] hover:text-[#c1a161]"
              href="#"
            >
              Concer más
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-4"
              >
                <path d="M5 12l14 0"></path>
                <path d="M15 16l4 -4"></path>
                <path d="M15 8l4 4"></path>
              </svg>
            </a>
            {/* <button className="relative mt-6 inline-flex items-center rounded-full bg-[#c1a161] px-8 py-3 text-xl font-medium text-[#373739] transition-colors duration-300 hover:bg-[#373739] hover:text-[#c1a161] sm:ml-6 sm:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-3 h-5 w-5"
              >
                <path
                  d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                  fill="currentColor"
                  strokeWidth="0"
                ></path>
              </svg>
              Conoce más
            </button> */}
          </div>
          <p className="mt-14 hidden font-medium uppercase tracking-wider text-black sm:block lg:hidden xl:block">
            aqui encontraras nuestros servicios, productos, ofertas y más
          </p>
          <div className="mt-8 hidden flex-col overflow-hidden sm:mt-5 sm:flex sm:flex-row lg:hidden xl:flex">
            <div className="flex flex-col items-center pb-5 sm:pb-0 sm:pr-10">
              <Ranking cantidad={5} subtitle={"servicios"} />
            </div>
            <div className="flex flex-col items-center border-x-0 border-[#373739] px-5 sm:border-x-2 sm:px-10 sm:py-0">
              <Ranking cantidad={5} subtitle={"productos"} />
            </div>
            <div className="flex flex-col items-center pt-5 sm:pl-10 sm:pt-0">
              <Ranking cantidad={5} subtitle={"precios"} />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 flex w-full max-w-3xl flex-col justify-center lg:col-span-6 lg:mt-0 lg:max-w-none">
          <div className="relative px-4">
            <img
              src="/logoSolo.webp"
              alt="Logo Grease para landingpage"
              className="h-auto w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="-mt-10 mb-8 flex flex-col items-center sm:hidden  lg:flex xl:hidden">
        <p className="mt-14 block font-medium uppercase tracking-wider text-[#373739]">
          aqui encontraras nuestros servicios, productos, ofertas y más
        </p>
        <div className="flex flex-col overflow-hidden sm:flex-row">
          <div className="flex flex-col items-center pb-5 sm:pb-0 sm:pr-10">
            <Ranking cantidad={5} subtitle={"servicios"} />
          </div>
          <div className="flex flex-col items-center border-x-0 border-[#373739] px-5 sm:border-x-2 sm:px-10 sm:py-0">
            <Ranking cantidad={5} subtitle={"productos"} />
          </div>
          <div className="flex flex-col items-center pt-5 sm:pl-10 sm:pt-0">
            <Ranking cantidad={5} subtitle={"precios"} />
          </div>
        </div>
      </div>
    </section>
  )
}