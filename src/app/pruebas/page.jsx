import Carousel from "@/components/Carousel";

function CategoryHeader() {
  return (
    <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 overflow-y-hidden overflow-x-scroll whitespace-nowrap bg-gray-100 px-4 py-6 text-black shadow-2xl sm:gap-0 sm:overflow-x-hidden">
      <a href="#" className="hover:underline">
        Cabello
      </a>
      <a href="#" className="hover:underline">
        Maquillaje
      </a>
      <a href="#" className="hover:underline">
        Cuidado de la piel
      </a>
      <a href="#" className="hover:underline">
        Uñas
      </a>
      <a href="#" className="hover:underline">
        Hombres
      </a>
    </div>
  );
}

function CategoryImageButton({ imageUrl, altImage }) {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex aspect-square h-56 w-56 items-center justify-center rounded-full bg-rose-200 transition-transform duration-500 hover:scale-90">
        <img
          src={imageUrl}
          alt={altImage}
          className="h-auto max-w-full rounded-full"
        />
      </div>
    </div>
  );
}

export default function Pruebas() {
  return (
    <div className="relative pt-16 sm:px-6 lg:px-8">
      <CategoryHeader />
      <Carousel />

      <div className="w-full py-12 sm:py-24">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          <CategoryImageButton
            imageUrl={"Categorias/Producto_cabello.webp"}
            altImage={"Producto para cabello"}
          />
          <CategoryImageButton
            imageUrl={"Categorias/Producto_maquillaje.png"}
            altImage={"Productos de maquillaje"}
          />
          <CategoryImageButton
            imageUrl={"Categorias/Producto_piel.png"}
            altImage={"Productos para cuidado de piel"}
          />
          <CategoryImageButton
            imageUrl={"Categorias/Producto_unias.webp"}
            altImage={"Productos para uñas"}
          />
          <CategoryImageButton
            imageUrl={"Categorias/Producto_hombre.webp"}
            altImage={"Productos para hombres"}
          />
        </div>
      </div>
    </div>
  );
}
