import Header from "@/components/Header"

export default function Home() {
  return (
    <div className="bg-balck h-screen">
      <Header />
      <div className="bg-bn-women opacity-90 w-full aspect-[960/200] bg-cover bg-center">

      </div>
      <div className="-mt-32 absolute ml-5">
        <h1 className="text-5xl text-[#FDF5A6] font-black">SALÓN </h1>
        <h1 className="text-5xl text-[#FDF5A6] font-black">DE BELLEZA PROFESIONAL</h1>
      </div>

      <div className=" flex gap-[4vw] flex-col m-5">
        <div className="flex flex-col">
          <p className="text-[#FDF5A6]">Calle Dr. Cristobal Gomez Jurado y Av. Mariano  Acosta</p>
          <p className="text-[#FDF5A6]">Ibarra, Ecuador</p>
        </div>

        <div className=" flex gap-[2vw] items-center">
          <img src="telephone-fill.svg"/>
          <p className="text-[#FDF5A6] text-3xl">+593 123456789</p>
        </div>
      </div>

      <div className="bg-[#FDF5A6] max-w-2xl h-10 mx-auto rounded-full">
        <div className="grid grid-cols-2">
              <div className="bg-blue-300 text-center">1</div>
              <div className="bg-green-300">2</div>
        </div>
      </div>

    </div>

  )
}
