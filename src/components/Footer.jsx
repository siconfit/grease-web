export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full bg-[#eedfc5] px-10 py-12">
      <div className="grid grid-cols-3 gap-16 text-center text-[#000]">
        <div className="flex flex-col items-center border-t-2 border-[#000]">
          <h1 className="text-auto my-2 font-bold md:text-3xl">INSTAGRAM</h1>
          <a href="https://www.instagram.com/grease_spa2024/">Síguenos</a>
          <img src="hand-fill.svg" alt="hand svg" />
        </div>
        <div className="flex flex-col items-center border-t-2 border-[#000]">
          <h1 className="text-auto my-2 font-bold md:text-3xl">FACEBOOK</h1>
          <a href="https://www.facebook.com/profile.php?id=61559385695955">
            Encuentra novedades
          </a>
          <img src="hand-fill.svg" alt="hand svg" />
        </div>
        <div className="flex flex-col items-center border-t-2 border-[#000]">
          <h1 className="text-auto my-2 font-bold md:text-3xl">TIKTOK</h1>
          <a href="https://www.tiktok.com/@grease.nails.alta">Da me encanta</a>
          <img src="hand-fill.svg" alt="hand svg" />
        </div>
      </div>
    </footer>
  );
}
