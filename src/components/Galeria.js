import Image from "next/image";
import React from 'react';
import i00 from '../../public/imgSlider/00.png'

export default function Galeria() {
  return (
    <>
      {/* Contenedor principal:
          - En móvil: flex-col (una columna)
          - En md y arriba: flex-row (dos columnas)
          - gap-4 para el espacio entre las columnas
      */}
      <div className="w-full h-[45vh] max-w-[1390px] mx-auto px-[30px] flex flex-col md:flex-row overflow-hidden rounded-3xl mt-12 gap-4">

        {/* Columna Izquierda:
            - Siempre visible.
            - Ocupa todo el ancho en móvil (w-full).
            - Ocupa la mitad del espacio en md y arriba (flex-1).
            - Aquí pondrías la imagen principal para móviles/escritorio.
        */}
        <div className="w-full md:flex-1 bg-blue-400 p-4 sm:h-[45vh] flex items-center justify-center text-white text-2xl rounded-l-3xl relative h-full">
          {/* Aquí iría la imagen principal. Por ejemplo: */}
           <Image
                src={ i00 } // Reemplaza con la ruta de tu imagen
                alt="Imagen principal de la galería"
                layout="fill" // o responsive dependiendo de tu necesidad
                objectFit="cover"
                className="rounded-l-3xl"
            /> 
          Contenedor Izquierdo (Imagen Principal)
        </div>

        {/* Columna Derecha:
            - OCULTA en móvil (hidden).
            - VISIBLE en md y arriba (md:flex-1 md:grid).
            - Se divide en 2x2 grid en md y arriba.
        */}
        <div className="hidden md:flex-1 md:grid grid-cols-2 grid-rows-2 gap-4">

          {/* Sub-contenedores de la columna derecha (solo visibles en md y arriba) */}
          <div className="bg-green-400 p-4 flex items-center justify-center text-white text-xl ">
            Derecha 1
          </div>

          <div className="bg-green-500 p-4 flex items-center justify-center text-white text-xl rounded-r-xl">
            Derecha 2
          </div>

          <div className="bg-green-600 p-4 flex items-center justify-center text-white text-xl">
            Derecha 3
          </div>

          <div className="bg-green-700 p-4 flex items-center justify-center text-white text-xl rounded-r-xl">
            Derecha 4
          </div>
        </div>
      </div>
    </>
  );
}