import CardTitle from "@/components/CardTitle";
import HomeButton from "@/components/HomeButton";

export default function page() {
  return (
    <>
      <HomeButton />
      <div className="relative mx-4 max-w-xl py-16 sm:mx-auto lg:max-w-5xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <CardTitle title={"MISIÓN"}>
            <p>
              Nuestros servicios estan encaminados a la mejora de la estética,
              la salud, con un concepto nuevo totalmente, que permite brindar
              servicios de calidad total a nuestros clientes con procesos y
              procedimientos en manos de expertos.
            </p>
          </CardTitle>

          <CardTitle title={"VISIÓN"}>
            <p>
              Para el 2029 seremos uno de los centros estéticos más reconocidos
              en la presentación de servicios de alta peluquería y spa en la
              ciudad de Ibarra buscando ser un modelo referente de franquicias a
              nivel regional y nacional.
            </p>
          </CardTitle>
        </div>
      </div>
    </>
  );
}
