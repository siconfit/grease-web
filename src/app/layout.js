import "./globals.css"
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Kameron:wght@400..700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
      </head>
      <body>
        <SimpleHeader />
        {children}
        <a
          href="https://api.whatsapp.com/send?phone=5930995421175&text="
          className="fixed bottom-10 right-10 z-50 h-16 w-16 rounded-[50px] bg-[#25d366] text-center text-3xl text-white"
          target="_blank"
        >
          <i className="fa fa-whatsapp mt-4"></i>
        </a>
        <Footer />
      </body>
    </html>
  )
}
