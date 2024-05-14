
export default function Services({ text_color, back_ground_color }) {
    return (
        <div className={`bg-[${back_ground_color}]`}>
            <div className="mx-auto max-w-2xl py-16">
                <div className="flex items-center">
                    <img src="SERVICE1.jpeg" className="w-1/2 rounded-md" />
                    <div className={`mx-auto text-3xl text-[${text_color}]`}>
                        <p><b>SERVICIOS</b></p>
                        <ul>
                            <li>I. MANICURA</li>
                            <li>II. PEDICURA</li>
                            <li>III. PESTAÑAS</li>
                            <li>IV. PELUQEURÍA</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
