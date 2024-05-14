import Link from "next/link"

export default function Header() {
    return (
        <header className="py-10 bg-[#eedfc5] relative">
            <nav className="flex items-center justify-center">
                <ul className="lg:flex items-center gap-[4vw] text-[#C1A161] font-bold hidden ">
                    <li className="bg-[#19191A] p-5 rounded-full">
                        <Link href="/aboutUs">¿Quienes somos?</Link>
                    </li>
                    <li className="bg-[#19191A] p-5 rounded-full">
                        <Link href="/mvv">Nuestros valores</Link>
                    </li>
                    <li className="bg-[#19191A] p-5 rounded-full">
                        <Link href="/">Servicios</Link>
                    </li>
                    <li className="bg-[#19191A] p-5 rounded-full">
                        <Link href="/">Productos</Link>
                    </li>
                    <li className="bg-[#19191A] p-5 rounded-full">
                        <Link href="/">Iniciar sesión</Link>
                    </li>
                    <li className="bg-[#19191A] p-5 rounded-full">
                        <Link href="/">Registrarse</Link>
                    </li>
                </ul>
                <div className="lg:hidden flex items-center">
                    <img src="hand-fill.svg" />
                </div>
            </nav>
        </header>
    )
}