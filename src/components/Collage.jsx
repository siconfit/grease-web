
export default function Collage({ text_color, back_ground_color }) {
    return (
        <div className={`bg-[${back_ground_color}] py-16 text-[${text_color}]`}>
            <div className="max-w-5xl mx-auto h-[400px] relative">
                <img src="SERVICE2.jpeg" className="w-[150px] rounded-md absolute top-0 left-10 opacity-80" />
                <img src="SERVICE3.jpeg" className="w-[150px] rounded-md absolute bottom-0 left-32 opacity-80" />
                <img src="SERVICE4.jpeg" className="w-[150px] rounded-md absolute top-5 right-16 opacity-80" />
                {/* <img src="SERVICE5.jpeg" className="w-[150px] rounded-md absolute inset-10" /> */}
                <img src="SERVICE6.jpeg" className="w-[150px] rounded-md absolute bottom-5 right-64 opacity-80" />
                <div className="text-5xl font-bold absolute top-[40%] ml-10">
                    <p>UN EQUIPO</p>
                    <p>DE LOS MEJORES PROFESIONALES</p>
                </div>
            </div>
        </div>
    )
}
