import "./globals.css"
import { kameron } from "@/app/ui/fonts";

import WhatsappButton from "@/components/WhatsappButton";
import SimpleHeader from "@/components/SimpleHeader"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Grease Nails Spa & Alta Peluquería",
  description: "Somos un equipo visionario emprendedor en el cuidado integral de la belleza, estamos convencidos de que los valores esenciales son: empatia, responsabilidad, calidad total, lo que buscamos ofrecer es satisfacer el deseo imperante de la estetica actual.En nuestra cartera de servicios te ofertamos tratmientos de belleza para manos y pies, cejas y pestañas, tratamientos capilares, masajes y faciales, esto para la poblacion de edades entre 5 a 75 años y servicios integrados para la familia.",
  keywords: "Grease Nails Spa & Alta Peluquería, Grease Nails, peluqueria Ibarra, spa Ibarra, uñas Ibarra, cabello Ibarra, estilista Ibarra, maquillaje Ibarra, masajes Ibarra, pestañas Ibarra, cejas Ibarra, pedicure Ibarra, uñeros Ibarra, barbero Ibarra, limpieza facial Ibarra, Ibarra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kameron.className} antialiased`}>
        <SimpleHeader />
        {children}
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  )
}
