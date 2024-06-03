
export default function Home() {
  return (
    <>
      <div className="mt-16 sm:mt-20 relative bg-black">
        <div className="w-full min-h-64 bg-black flex justify-center items-center">
          <img src="/caraLogo.jpeg" className="h-[200px] hidden lg:block" />
          <img src="/logoSolo.jpeg" />
          <img src="/caraLogo.jpeg" className="h-[200px] hidden md:block" />
        </div>

      </div>
      <div className="flex justify-center my-32 max-w-3xl mx-auto relative">
        <p className="text-black text-2xl sm:text-3xl md:text-5xl text-center mx-5">
          ¡Hola! Bienvenid@ a nuestro sitio web en donde encontrarás nuestros productos, servicios, ofertas y más
        </p>
      </div>
    </>

  )
}