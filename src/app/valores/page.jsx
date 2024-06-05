import CardTitle from "@/components/CardTitle";
import HomeButton from "@/components/HomeButton";

export default function valores() {
  return (
    <>
      <HomeButton />
      <div className="text-md relative py-16">
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
    </>
  );
}
