import Link from "next/link"

export default function mvv() {
    return (
        <div className="text-[#c1a161] relative py-16" >
            <div className="grid grid-cols-3 gap-32 max-w-6xl mx-auto">
                <div className="flex flex-col items-center text-center">
                    <p className="p-5 bg-[#373739] rounded-xl">
                        <b>MISIÓN</b>
                    </p>
                    <div className="p-5 bg-[#373739] rounded-xl mt-8 w-full h-full flex items-center justify-center">
                        <p>
                            OFRECEMOS PRODUCTOS Y SERVICIOS PARA CONSENTIR A TODOS, HOMBRES, MUJERES Y NIÑOS, SATISFACIENDO LAS NECESIDADES Y EXIGENCIAS DE CADA CLIENTE
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center">
                    <p className="p-5 bg-[#373739] rounded-xl">
                        <b>VISIÓN</b>
                    </p>
                    <div className="p-5 bg-[#373739] rounded-xl mt-8 w-full h-full flex items-center justify-center">
                        <p>
                            PARA EL 2029 GREASE NAILS SPA & ALTA PELUQUERÍA SE CONVERTÍRA EN UNO DE LOS CENTROS ESTÉTICOS MÁS RECONOCIDOS EN LA PRESENTACIÓN DE SERVICIOS DE ALTA PELUQUERÍA Y SPA EN LA CIUDAD DE IBARRA
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center">
                    <p className="p-5 bg-[#373739] rounded-xl">
                        <b>VALORES</b>
                    </p>
                    <div className="p-5 bg-[#373739] rounded-xl mt-8 w-full h-full flex items-center justify-center">
                        <ul>
                            <li>EXCELENCIA</li>
                            <li>PUNTUALIDAD</li>
                            <li>HONESTIDAD</li>
                            <li>INTEGRIDAD</li>
                        </ul>
                    </div>
                </div>
            </div>
            <button className=" bg-[#373739] text-[#c1a161] right-32 bottom-16 px-8 py-4 rounded-full">
                <Link href="/">Regresar</Link>
            </button>
        </div>
    )
}
