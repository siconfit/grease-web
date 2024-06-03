export default function servicios() {
  return (
    <div className="relative py-16">
      <div className="mx-12 max-w-5xl xl:mx-auto">
        <div className="flex">
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800">
            <img
              src="SERVICE1.jpeg"
              className="absolute inset-0 h-full w-full object-cover"
              alt="servicio 1"
            />
          </div>
          <div className="mx-5 flex w-full flex-col justify-between bg-zinc-100">
            <div className="text-2xl font-bold">MANICURE</div>
            <div className="">
              Ofertamos este servicio en express, tradicional permanente,
              acrílico, polygel, ponemos a tres expertas que desarrollan el
              trabajo en uñas desarrollando la perfección en cada uno de los
              diseños.
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <di>Manicure tradicional</di>
              <div>$ 5.00</div>
            </div>
            <div className="h-0.5 w-full bg-gray-600"></div>
            <div className="flex justify-between text-lg font-semibold">
              <di>Manicure tradicional</di>
              <div>$ 5.00</div>
            </div>
            <div className="h-0.5 w-full bg-gray-600"></div>
            <div className="flex justify-between text-lg font-semibold">
              <di>Manicure tradicional</di>
              <div>$ 5.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
