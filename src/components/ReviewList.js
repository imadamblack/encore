import Image from 'next/image';

const ReviewList = () => {
    const comentarios = [
        {
            user_img: "/img-Comentarios/01.png",
            nombre: "Mauro T",
            ciudad: "",
            pais: "Tripadvisor",
            calificacion: "⭐⭐⭐⭐⭐",
            fecha: "Hace un Mes",
            tipo: "Viaje de negocios",
            comentario: "Todo Exelente, el trato del recepcionista Ricardo, la atencion y el cuarto. La habitacion limpia, comada, el espacio bien. Las instalaciones del hotel bien, aun no pruebo la comida pero me imagino que todo estasra bien a lo que vi. Graccias Encore"
        },
        {
            user_img: "/img-Comentarios/02.png",
            nombre: "Margarita Lucatero",
            ciudad: "",
            pais: "Google",
            calificacion: "⭐⭐⭐⭐⭐",
            fecha: "Hace 4 Meses",
            tipo: "",
            comentario: "La pasamos tan bien que no recordamos tomar fotos. Tienes coctel de cortesía al llegar. El desayuno buffet espectacular. La cama y almohada son un sueño. El personal del hotel superamable. Sin duda la mejor opción cerca del aeropuerto."
        },
        {
            user_img: "/img-Comentarios/03.png",
            nombre: "Jesús R",
            ciudad: "",
            pais: "Tripadvisor",
            calificacion: "⭐⭐⭐⭐⭐",
            fecha: "Hace un Mes",
            tipo: "",
            comentario: "el trato del personal fue excelente, el lugar es muy bonito y cómodo."
        },
        {
            user_img: "/img-Comentarios/04.png",
            nombre: "David Botello Huerta",
            ciudad: "",
            pais: "Google ",
            calificacion: "⭐⭐⭐⭐",
            fecha: "Hace 3 Meses",
            tipo: "Vacaciones en Pareja",
            comentario: "Fue muy agradable la estancia y la comida del restaurante también de buen sabor"
        },
        {
            user_img: "/img-Comentarios/05.png",
            nombre: "Margaret Rosas",
            ciudad: "",
            pais: "Google",
            calificacion: "⭐⭐⭐⭐⭐",
            fecha: "",
            tipo: "Negocios",
            comentario: "Servicio atento del gerente y muy buen trato. Muchachas gracias por hacer mi estadía agradable y proporcionarme un gran descanso, sigan compartiendo esa atención al cliente con su personal"
        },
        {
            user_img: "/img-Comentarios/06.png",
            nombre: "Walter S",
            ciudad: "",
            pais: "Tripadvisor",
            calificacion: "⭐⭐⭐⭐⭐",
            fecha: "",
            tipo: "Negocios",
            comentario: "Muy buen servicio en general, el lugar es muy acogedor y la ubicación es ideal para el trabajo, tiene empleados muy serviciales y están siempre atentos a las solicitudes y ayudes que tiene uno, el lugar está siempre limpio, lo recomendaría siempre y seguiría viniendo"
        }
    ];

    return (
        <div className='max-w-[1120px] mx-auto mt-10 px-[30px] w-full py-6'>
            {/* Contenedor grid para 2 columnas en PC y 1 en móvil */}
            <div className='text-5xl font-bold font-nunito pb-4'>Calificaciones de huéspedes que no eligen cualquier hotel</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {comentarios.map((comentario, index) => (
                    <div key={`com-${index}`} className="bg-white p-6 rounded-lg ">
                        <div className="flex flex-row items-center gap-8">
                            <div className="rounded-full w-[64px] overflow-hidden">
                                <img 
                                    src={comentario.user_img} 
                                    alt={`Imagen de ${comentario.nombre}`} 
                                    className="w-full h-full object-cover" 
                                />
                            </div>
                            <div>
                                <div className="text-3xl font-semibold">{comentario.nombre}</div>
                                <div className="text-xl">{`${comentario.ciudad}, ${comentario.pais}`}</div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-8 mt-4">
                            <div className="text-xl">{comentario.calificacion}</div>
                            |
                            <div className="text-xl font-semibold">{comentario.fecha}</div>
                            |
                            <div className="text-xl">{comentario.tipo}</div>
                        </div>
                        <div className="text-2xl font-semibold mt-4 text text-justify">{comentario.comentario}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReviewList;