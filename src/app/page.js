
export default function Home() {
  return (
    <div className="bg-gray-900">
      <div className="bg-header-banner opacity-80 aspect-[960/300] bg-cover bg-center">
      </div>
      <div className="-mt-32 absolute ml-5">
        <h1 className="text-5xl text-[#FDF5A6] font-black">SALÓN </h1>
        <h1 className="text-5xl text-[#FDF5A6] font-black">DE BELLEZA PROFESIONAL</h1>
      </div>

      <div className=" flex gap-[4vw] flex-col m-5">
        <div className="flex flex-col text-[#FDF5A6]">
          <p className="">Calle Dr. Cristobal Gomez Jurado y Av. Mariano  Acosta</p>
          <p className="">Ibarra, Ecuador</p>
        </div>

        <div className=" flex gap-[2vw] items-center">
          <img src="telephone-fill.svg" />
          <p className="text-[#FDF5A6] text-3xl">+593 960861178</p>
        </div>
      </div>

      <div className="waves"></div>

      <div className="bg-[#FDF5A6] py-16">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2">
            <p className="flex items-center text-center text-[#000] font-bold mx-5">
              ¡Llegamos a Ibarra para consentir a todos, hombres, mujeres y niños!
              Ofrecemos servicios de manicura, pedicura, alisados, hidratación, diseño de cejas, lifting de pestañas, masajes y muchas sorpresas más para ti.
              ¡Te esperamos!</p>
            <img src="LOGO.jpeg" className="rounded-full " />
          </div>
        </div>
      </div>

      <div className="blob py-16">
        <div className="max-w-2xl mx-auto ring-8 ring-[#fff] rounded-[12px] p-5">
        <div className="py-5">
          <p className="text-center text-[#000]"><b>MISIÓN</b></p>
          <p className="text-center text-[#000]">
            OFRECEMOS PRODUCTOS Y SERVICIOS PARA CONSENTIR A TODOS, HOMBRES, MUJERES Y NIÑOS, SATISFACIENDO LAS NECESIDADES Y EXIGENCIAS DE CADA CLIENTE
          </p>
        </div>
        <div className="py-5">
          <p className="text-center text-[#000]"><b>VISIÓN</b></p>
          <p className="text-center text-[#000]">
            PARA EL 2029 GREASE NAILS SPA & ALTA PELUQUERÍA SE CONVERTÍRA EN UNO DE LOS CENTROS ESTÉTICOS MÁS RECONOCIDOS EN LA PRESENTACIÓN DE SERVICIOS DE ALTA PELUQUERÍA Y SPA EN LA CIUDAD DE IBARRA
          </p>
        </div>
        <p className="text-center text-[#000]"><b>VALORES</b></p>
        <ul>
          <li className="text-center text-[#000]">EXCELENCIA</li>
          <li className="text-center text-[#000]">PUNTUALIDAD</li>
          <li className="text-center text-[#000]">HONESTIDAD</li>
          <li className="text-center text-[#000]">INTEGRIDAD</li>
        </ul>
      </div>
      </div>
      

      <div className="mx-auto max-w-2xl py-16">
        <div className="flex items-center">
          <img src="SERVICE1.jpeg" className="w-1/2 rounded-md" />
          <div className="mx-auto text-3xl text-[#FDF5A6]">
            <p className=""><b>VALORES</b></p>
            <ul>
              <li className="">I. EXCELENCIA</li>
              <li className="">II. PUNTUALIDAD</li>
              <li className="">III. HONESTIDAD</li>
              <li className="">IV. INTEGRIDAD</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto h-[400px] my-16 relative">

        <img src="SERVICE2.jpeg" className="w-[150px] rounded-md absolute top-0 left-10 opacity-80" />
        <img src="SERVICE3.jpeg" className="w-[150px] rounded-md absolute bottom-0 left-32 opacity-80" />
        <img src="SERVICE4.jpeg" className="w-[150px] rounded-md absolute top-5 right-16 opacity-80" />
        {/* <img src="SERVICE5.jpeg" className="w-[150px] rounded-md absolute inset-10" /> */}
        <img src="SERVICE6.jpeg" className="w-[150px] rounded-md absolute bottom-5 right-64 opacity-80" />
        <div className="text-5xl text-[#FDF5A6] font-bold absolute top-[40%] ml-10">
          <p>UN EQUIPO</p>
          <p>DE LOS MEJORES PROFESIONALES</p>
        </div>
      </div>

      <footer className="bg-black py-16 px-10">
        <div className="text-[#FDF5A6] grid grid-cols-3 gap-10">
          <div className="flex flex-col items-center border-t-4 border-[#FDF5A6]">
            <h1 className="text-2xl font-bold my-2">INSTAGRAM</h1>
            <img src="instagram.svg" />
            <a href="https://www.instagram.com/grease_spa2024/">Síguenos</a>
          </div>
          <div className="flex flex-col items-center border-t-4 border-[#FDF5A6]">
            <h1 className="text-2xl font-bold my-2">FACEBOOK</h1>
            <img src="facebook.svg" />
            <a href="#">Encuentra novedades</a>
          </div>
          <div className="flex flex-col items-center border-t-4 border-[#FDF5A6]">
            <h1 className="text-2xl font-bold my-2">TIKTOK</h1>
            <img src="tiktok.svg" />
            <a href="https://www.tiktok.com/@grease.nails.alta">Da me encanta</a>
          </div>
        </div>
      </footer>
    </div>
  )
}