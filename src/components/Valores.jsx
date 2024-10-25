import CardTitle from "./CardTitle";

export default function Valores() {
  return (
    <div className="text-md relative py-10">
      <div className="mx-4 grid max-w-5xl grid-cols-1 sm:mx-auto lg:gap-28">
        <div className="flex flex-col items-center text-center">
          <CardTitle title={"VALORES"}>
            <ul>
              <li>Empatia</li>
              <li>Responsabilidad</li>
              <li>Calidad total</li>
              <li>Garantía</li>
              <li>Exclusividad</li>
            </ul>
          </CardTitle>
        </div>
      </div>
    </div>
  );
}
