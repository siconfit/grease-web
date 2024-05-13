import Link from "next/link"

export default function Header() {
    return (
        <header className="bg-black">
            <nav className=" flex justify-between items-center w-[90%] mx-auto py-5">
                <div>
                    <img className="w-16" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" />
                </div>
                <div className="">
                    <ul className="flex items-center gap-[4vw] text-[#FDF5A6] font-bold">
                        <li className="">
                            <Link href="/">Inicio</Link>
                        </li>
                        <li className="">
                            <Link href="/productos">Productos</Link>
                        </li>
                        <li className="">
                            <Link href="/mas">Más</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="border-2 border-[#FDF5A6] rounded-xl p-2 text-[#FDF5A6]">
                        Sign in
                    </button>
                </div>
            </nav>
        </header>
    )
}