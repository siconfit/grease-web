
export default function MSV({ text_color, back_ground_color, bgc_card }) {
    return (
        <div className={`text-[${text_color}] bg-[${back_ground_color}] py-16`}>

            <div className="grid grid-cols-3 gap-10 mx-10">
                <div className={`p-5 bg-[${bgc_card}] rounded-xl flex flex-col items-center justify-center`}>
                    <p><b>MISIÓN</b></p>
                    <p className="text-center">
                        OFRECEMOS PRODUCTOS Y SERVICIOS PARA CONSENTIR A TODOS, HOMBRES, MUJERES Y NIÑOS, SATISFACIENDO LAS NECESIDADES Y EXIGENCIAS DE CADA CLIENTE
                    </p>
                </div>
                <div className={`p-5 bg-[${bgc_card}] rounded-xl flex flex-col items-center justify-center`}>
                    <p><b>VISIÓN</b></p>
                    <p className="text-center">
                        PARA EL 2029 GREASE NAILS SPA & ALTA PELUQUERÍA SE CONVERTÍRA EN UNO DE LOS CENTROS ESTÉTICOS MÁS RECONOCIDOS EN LA PRESENTACIÓN DE SERVICIOS DE ALTA PELUQUERÍA Y SPA EN LA CIUDAD DE IBARRA
                    </p>
                </div>
                <div className={`p-5 bg-[${bgc_card}] rounded-xl flex flex-col items-center justify-center`}>
                    <p><b>VALORES</b></p>
                    <ul>
                        <li>EXCELENCIA</li>
                        <li>PUNTUALIDAD</li>
                        <li>HONESTIDAD</li>
                        <li>INTEGRIDAD</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
