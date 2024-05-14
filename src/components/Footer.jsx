
export default function Footer() {
    return (
        <footer className="bg-[#eedfc5] py-12 px-10 w-full relative">
            <div className="text-[#000] grid grid-cols-3 gap-10 text-center">
                <div className="flex flex-col items-center border-t-4 border-[#000]">
                    <h1 className="text-auto md:text-3xl font-bold my-2">INSTAGRAM</h1>
                    <a href="https://www.instagram.com/grease_spa2024/">Síguenos</a>
                    <img src="hand-fill.svg" />
                    
                </div>
                <div className="flex flex-col items-center border-t-4 border-[#000]">
                    <h1 className="text-auto md:text-3xl font-bold my-2">FACEBOOK</h1>
                    <a href="https://www.facebook.com/profile.php?id=61559385695955">Encuentra novedades</a>
                    <img src="hand-fill.svg" />
                    
                </div>
                <div className="flex flex-col items-center border-t-4 border-[#000]">
                    <h1 className="text-auto md:text-3xl font-bold my-2">TIKTOK</h1>
                    <a href="https://www.tiktok.com/@grease.nails.alta">Da me encanta</a>
                    <img src="hand-fill.svg" />

                </div>
            </div>
        </footer>
    )
}
