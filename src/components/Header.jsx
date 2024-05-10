
export default function Header() {
    return (
        <header className="bg-white">
            <nav className=" flex justify-between items-center w-[90%] mx-auto">
                <div>
                    <img className="w-16" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" />
                </div>
                <div className="">
                    <ul className="flex items-center gap-[4vw]">
                        <li className="text-black">Inicio</li>
                        <li className="text-black">Productos</li>
                        <li className="text-black">Más</li>
                    </ul>
                </div>
                <div>
                    <button className="text-black ">Sign in</button>
                </div>
            </nav>
        </header>
    )
}