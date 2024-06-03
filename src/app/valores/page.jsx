import Link from "next/link";

export default function valores() {
  return (
    <div className="text-md relative py-16 text-[#c1a161] lg:text-xl">
      <div className="mx-12 grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-3 lg:gap-28 xl:mx-auto">
        <div className="flex flex-col items-center text-center">
          <p className="rounded-xl bg-[#373739] p-5">
            <b>MISIÓN</b>
          </p>
          <div className="mt-8 flex h-full w-full items-center justify-center rounded-xl bg-[#373739] p-5">
            <p>
              OFRECEMOS PRODUCTOS Y SERVICIOS PARA CONSENTIR A TODOS, HOMBRES,
              MUJERES Y NIÑOS, SATISFACIENDO LAS NECESIDADES Y EXIGENCIAS DE
              CADA CLIENTE
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="rounded-xl bg-[#373739] p-5">
            <b>VISIÓN</b>
          </p>
          <div className="mt-8 flex h-full w-full items-center justify-center rounded-xl bg-[#373739] p-5">
            <p>
              PARA EL 2029 GREASE NAILS SPA & ALTA PELUQUERÍA SE CONVERTÍRA EN
              UNO DE LOS CENTROS ESTÉTICOS MÁS RECONOCIDOS EN LA PRESENTACIÓN DE
              SERVICIOS DE ALTA PELUQUERÍA Y SPA EN LA CIUDAD DE IBARRA
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="rounded-xl bg-[#373739] p-5">
            <b>VALORES</b>
          </p>
          <div className="mt-8 flex h-full w-full items-center justify-center rounded-xl bg-[#373739] p-5">
            <ul>
              <li>Calidad</li>
              <li>Garantía</li>
              <li>Diseño</li>
              <li>Exclusividad</li>
              <li>Durabilidad</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex w-[80%] items-center justify-end">
        <button className=" bottom-16 right-32 rounded-full bg-[#373739] px-8 py-4 text-[#c1a161]">
          <Link href="/">Regresar</Link>
        </button>
      </div>
    </div>
  );
}
