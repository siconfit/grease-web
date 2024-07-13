
export default function AboutUs({ text_color, back_ground_color }) {
    return (
        <div className={`text-[${text_color}] bg-[${back_ground_color}] py-16`}>
            <div className='ml-10'>
                <div>
                    <p>Calle Dr. Cristobal Gomez Jurado y Av. Mariano  Acosta</p>
                    <p>Ibarra, Ecuador</p>
                </div>

                <div className=" flex gap-[2vw] items-center mt-5">
                    {/* <img src="telephone-fill.svg"/> */}
                    <p className="text-3xl font-bold">+593 960861178</p>
                </div>
            </div>


            <div className="max-w-2xl mx-auto">
                <div className="grid grid-cols-2">
                    <p className="flex items-center text-center  font-bold mx-5">
                        ¡Llegamos a Ibarra para consentir a todos, hombres, mujeres y niños!
                        Ofrecemos servicios de manicura, pedicura, alisados, hidratación, diseño de cejas, lifting de pestañas, masajes y muchas sorpresas más para ti.
                        ¡Te esperamos!</p>
                    <img src="LOGO.jpeg" className="rounded-full " />
                </div>
            </div>
        </div>
    )
}