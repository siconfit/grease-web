import ServiceCard from "@/components/ServiceCard";
export default function Servicios() {
  return (
    <div className="relative mt-8 py-16">
      <div className="mx-4 max-w-5xl md:mx-auto">
        <div className="md:-mx-4 md:flex">
          <ServiceCard
            urlImage={
              "https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            title="Manicura"
            description={
              "La manicura es un tratamiento de belleza para las uñas y las manos. Incluye el recorte, limado y pulido de las uñas, la eliminación de cutículas y, a menudo, la aplicación de esmalte. A veces se complementa con masajes y tratamientos hidratantes para las manos. Una sesión de mimo total para tus manos."
            }
            styleProp={
              "h-64 w-full overflow-hidden rounded-md bg-cover bg-center md:mx-4 md:w-1/3"
            }
          />
          <ServiceCard
            urlImage={
              "https://images.pexels.com/photos/69198/pexels-photo-69198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            title="Pedicura"
            description={
              "La pedicura es un tratamiento de belleza para los pies y las uñas de los pies. Implica cortar, limar y pulir las uñas, eliminar callos y durezas, y masajear e hidratar los pies. Es como un spa relajante para tus pies, dejándolos suaves y rejuvenecidos."
            }
            styleProp={
              "mt-8 md:mt-0 h-64 w-full overflow-hidden rounded-md bg-cover bg-center md:mx-4 md:w-2/3"
            }
          />
        </div>
        <ServiceCard
          urlImage={
            "https://images.pexels.com/photos/28994645/pexels-photo-28994645/free-photo-of-como-aplicar-spray-para-el-cabello-sobre-cabello-largo-y-rojo-en-interiores.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title={"Estilismo"}
          description={
            "El estilismo es el arte de cortar, peinar y tratar el cabello para mejorar su apariencia y reflejar la personalidad del individuo. Involucra técnicas como cortes, coloraciones, tratamientos de acondicionamiento y peinados especiales. Todo para realzar la belleza y la confianza de una persona."
          }
          styleProp={"mt-8 h-64 overflow-hidden rounded-md bg-cover bg-center"}
        />
        <div className="mt-8 md:-mx-4 md:flex">
          <ServiceCard
            urlImage={
              "https://images.pexels.com/photos/713949/pexels-photo-713949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            title={"Pestañas"}
            description={
              "El arreglo de pestañas es un tratamiento de belleza que incluye la aplicación de extensiones, tintes o levantamientos de pestañas para mejorar su longitud, grosor y curvatura. El objetivo es realzar la apariencia de los ojos, haciéndolos más expresivos y atractivos sin la necesidad de maquillaje diario."
            }
            styleProp={
              "h-64 w-full overflow-hidden rounded-md bg-cover bg-center md:mx-4 md:w-1/2"
            }
          />
          <ServiceCard
            urlImage={
              "https://images.pexels.com/photos/4154199/pexels-photo-4154199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            title={"Cejas"}
            description={
              "El arreglo de cejas incluye técnicas como depilación, perfilado y tintado para dar forma y mejorar la apariencia de las cejas. El objetivo es crear un marco equilibrado y atractivo para los ojos, acentuando las características faciales y realzando la expresión natural del rostro."
            }
            styleProp={
              "mt-8 h-64 w-full overflow-hidden rounded-md bg-cover bg-center md:mx-4 md:mt-0 md:w-1/2"
            }
          />
        </div>
        <ServiceCard
          urlImage={
            "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title={"Barberia"}
          description={
            "El servicio de barbería incluye cortes de cabello, arreglos de barba y bigote, y tratamientos de cuidado para el cuero cabelludo. Los barberos usan técnicas tradicionales y modernas para crear estilos personalizados que realzan la apariencia masculina. Es un espacio donde los hombres pueden relajarse y recibir un trato profesional."
          }
          styleProp={"mt-8 h-64 overflow-hidden rounded-md bg-cover bg-center"}
        />
        <div className="mt-8 md:-mx-4 md:flex">
          <ServiceCard
            urlImage={
              "https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            title={"Maquillaje"}
            description={
              "El servicio de maquillaje consiste en aplicar productos cosméticos para realzar o transformar la apariencia del rostro. Incluye técnicas como contouring, aplicación de sombras, delineado de ojos y labiales, adaptándose a diferentes ocasiones como eventos, sesiones fotográficas o el día a día. Todo para destacar la belleza natural y estilo personal."
            }
            styleProp={
              "h-64 w-full overflow-hidden rounded-md bg-cover bg-center md:mx-4 md:h-72 md:w-1/3"
            }
          />
          <ServiceCard
            urlImage={
              "https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            title={"Cuidado Facial"}
            description={
              "Un servicio facial es un tratamiento de belleza que incluye la limpieza profunda, exfoliación, extracción de impurezas, masajes y aplicación de mascarillas. El objetivo es mejorar la salud y apariencia de la piel, dejándola más limpia, hidratada y radiante. Ideal para mimar y rejuvenecer el rostro."
            }
            styleProp={
              "mt-8 h-64 w-full overflow-hidden rounded-md bg-cover bg-center md:mx-4 md:mt-0 md:h-72 md:w-1/3"
            }
          />
          <ServiceCard
            urlImage={
              "https://images.pexels.com/photos/5240768/pexels-photo-5240768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            title={"Depilaciones"}
            description={
              "El servicio de depilación consiste en la eliminación del vello no deseado de diferentes partes del cuerpo mediante técnicas como la cera, el láser o la depilación con hilo. El objetivo es lograr una piel suave y libre de vello, adaptada a las necesidades y preferencias individuales. Ideal para mantener una apariencia cuidada y cómoda."
            }
            styleProp={
              "mt-8 h-64 w-full overflow-hidden rounded-md bg-cover bg-center md:mx-4 md:mt-0 md:h-72 md:w-1/3"
            }
          />
        </div>
        <ServiceCard
          urlImage={
            "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title={"Masajes"}
          description={
            "El servicio de masajes consiste en la manipulación de los músculos y tejidos del cuerpo para aliviar el estrés, mejorar la circulación y promover la relajación. Utiliza diversas técnicas como el masaje sueco, de tejido profundo y aromaterapia para revitalizar y equilibrar el cuerpo y la mente. Un oasis de bienestar."
          }
          styleProp={"mt-8 h-64 overflow-hidden rounded-md bg-cover bg-center"}
        />
      </div>
    </div>
  );
}
