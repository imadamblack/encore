import Image from 'next/image';


const ReviewList = () => { // Renombrado el componente para reflejar que renderiza una lista
    const comentarios = [
        {
            user_img: "/img-Comentarios/04.png",
            nombre: "Juan Jose",
            ciudad: "Zapopan",
            pais: "México",
            calificacion: "⭐⭐⭐⭐⭐",
            fecha: "Enero 2023",
            tipo: "Viaje de negocios",
            comentario: "Un anfitrión muy receptivo y un lugar genial:) Me hospedaría aquí de nuevo."
        },
        // Puedes añadir más objetos comentario aquí si hay más
        {
             user_img: "/img-Comentarios/05.png",
             nombre: "Maria Cuevas",
             ciudad: "Guadalajara",
             pais: "México",
             calificacion: "⭐⭐⭐⭐",
             fecha: "Febrero 2023",
             tipo: "Vacaciones",
             comentario: "Muy buena ubicación, el lugar es cómodo."
        }
    ];

    return (
        <div className='max-w-[1120px] mx-auto mt-10 px-[30px] w-full border-t border-b py-6' >
            {/* este es el contenedor del elemento de comentarios*/}

            {comentarios.map((comentario, index) => ( // Sintaxis corregida y uso de 'comentario'
                <div key={`com-${index}`} className="my-10">
                    <div className="flex flex-row items-center gap-8">
                        <div className="rounded-full w-[64px] overflow-hidden"> {/* Posiblemente quieras overflow-hidden */}
                             {/* Usando <img> si user_img es una URL */}
                             <img src={comentario.user_img} alt={`Imagen de ${comentario.nombre}`} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            {/* Usando las propiedades del objeto 'comentario' */}
                            <div className="text-3xl font-semibold">{comentario.nombre}</div>
                            <div className="text-xl">{`${comentario.ciudad}, ${comentario.pais}`}</div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-8 mt-4">
                        {/* Usando las propiedades del objeto 'comentario' */}
                        <div className="text-xl">{comentario.calificacion}</div>
                        |
                        <div className="text-xl font-semibold">{comentario.fecha}</div>
                        |
                        <div className="text-xl">{comentario.tipo}</div>
                    </div>
                    {/* Usando la propiedad 'comentario' (el texto de la reseña) */}
                    <div className="text-2xl font-semibold">{comentario.comentario}</div>
                </div>
            ))}

        </div>
    );
}

export default ReviewList; // Exportar el componente renombrado