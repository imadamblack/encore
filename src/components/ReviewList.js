import Image from 'next/image';

const ReviewList = () => {
    const comentarios = [
        {
            user_img: "/img-Comentarios/01.png",
            nombre: "Juan Jose",
            ciudad: "Zapopan",
            pais: "México",
            calificacion: "⭐⭐⭐⭐⭐",
            fecha: "Enero 2023",
            tipo: "Viaje de negocios",
            comentario: "Un anfitrión muy receptivo y un lugar genial :) Me hospedaría aquí de nuevo."
        },
        {
            user_img: "/img-Comentarios/02.png",
            nombre: "Maria Cuevas",
            ciudad: "Guadalajara",
            pais: "México",
            calificacion: "⭐⭐⭐⭐",
            fecha: "Febrero 2023",
            tipo: "Vacaciones",
            comentario: "Muy buena ubicación, el lugar es cómodo."
        },
        {
            user_img: "/img-Comentarios/03.png",
            nombre: "Ivan Hernandez",
            ciudad: "Queretaro",
            pais: "México",
            calificacion: "⭐⭐⭐⭐⭐",
            fecha: "mayo 2025",
            tipo: "Negocios",
            comentario: "el trato del personal fue excelente, el lugar es muy bonito y cómodo."
        },
        {
            user_img: "/img-Comentarios/04.png",
            nombre: "Angelina Villalobos",
            ciudad: "Cuquio",
            pais: "México",
            calificacion: "⭐⭐⭐⭐⭐",
            fecha: "mayo 2025",
            tipo: "Negocios",
            comentario: "los empleados siempre estan diponibles para resolver tus duda, el lugar es muy bonito y cómodo."
        }
    ];

    return (
        <div className='max-w-[1120px] mx-auto mt-10 px-[30px] w-full py-6'>
            {/* Contenedor grid para 2 columnas en PC y 1 en móvil */}
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
                        <div className="text-2xl font-semibold mt-4">{comentario.comentario}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReviewList;