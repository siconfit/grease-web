import Link from "next/link";

export default function mvv() {
  return (
    <div className="relative py-16 text-[#c1a161]">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-32">
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
              <li>EXCELENCIA</li>
              <li>PUNTUALIDAD</li>
              <li>HONESTIDAD</li>
              <li>INTEGRIDAD</li>
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
