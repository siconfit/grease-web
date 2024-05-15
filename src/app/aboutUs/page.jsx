import Link from "next/link";

export default function aboutUs() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 py-16">
                <div className="mx-4 md:mx-16 relative">
                    <h1 className="text-5xl font-bold text-center text-black">¿Quienes somos?</h1>
                    <p className="text-center font-bold bg-[#373739] text-[#c1a161] text-xl md:text-2xl lg:text-3xl mt-16 p-8 rounded-[25px] text-wrap ">
                        Somos Grease Nails Spa & Alta Peluquería, llegamos a la ciudad de Ibarra a ofrecerte productos y servicios de alta calidad y que cumplan todas las expectativas que tienes, nuestros servicios son para todos hombres, mujeres y niños.
                        En nuestra cartera de servicios te ofrecemos diseños de cejas, laminados, lifting de pestañas, pestañas pelo a pelo, manicura, pedicura, keratina, hidratación, masajes, y muchas cosas más para ti.
                    </p>
                </div>

                <div className="relative hidden lg:block">
                    <img src="SERVICE1.jpeg" className="rounded-lg absolute h-[250px] top-[5%] right-8" />
                    <img src="SERVICE2.jpeg" className="rounded-lg absolute h-[200px] top-[10%] left-24" />
                    <img src="SERVICE3.jpeg" className="rounded-lg absolute h-[200px] top-[55%] right-8" />
                    <img src="SERVICE4.jpeg" className="rounded-lg absolute h-[200px] top-[60%] left-16" />
                </div>
                <div className="relative flex justify-center lg:hidden">
                    <img src="SERVICE1.jpeg" className="rounded-lg h-[250px]" />
                </div>
                <div className="flex justify-center items-center">
                    <button className=" bg-[#373739] text-[#c1a161] px-8 py-4 rounded-full relative">
                        <Link href="/">Regresar</Link>
                    </button>
                </div>

            </div>
        </div>

    )
}
