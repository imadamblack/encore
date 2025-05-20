import React from 'react';
import Image from 'next/image';
import i00 from '../../public/imgSlider/00.png';
import i01 from '../../public/imgSlider/01.png';
import i02 from '../../public/imgSlider/02.png';
import i03 from '../../public/imgSlider/03.png';
import i04 from '../../public/imgSlider/04.png';

export default function Galeria() {
  const altura = 'h-[45vh]';
  return (
    <>
      {/* Contenedor principal */}
      <div className="w-full h-[50vh] max-w-[1120px]  mx-auto px-[5px] hidden md:flex flex-col md:flex-row overflow-hidden  mt-12 gap-3">

        {/* Columna Izquierda */}
        <div className="w-full md:flex-1 bg-blue-400 p-4 sm:h-[50vh] flex items-center justify-center text-white text-2xl sm:rounded-3xl md:rounded-l-3xl relative h-full group">
          <Image
            src={i00}
            alt="Imagen principal de la galería"
            layout="fill"
            objectFit="cover"
            className="md:rounded-l-3xl "
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 md:rounded-l-3xl"></div>
          Contenedor Izquierdo (Imagen Principal)
        </div>

        {/* Columna Derecha */}
        <div className="hidden md:flex-1 md:grid grid-cols-2 grid-rows-2 gap-3">

          {/* Sub-contenedores de la columna derecha */}
          <div className="bg-green-400 p-4 flex items-center justify-center text-white text-xl relative h-full group">
            <Image
              src={i01}
              alt="Imagen principal de la galería"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            Derecha 1
          </div>

          <div className="bg-green-500 p-4 flex items-center justify-center text-white text-xl rounded-tr-3xl relative h-full group">
            <Image
              src={i02}
              alt="Imagen principal de la galería"
              layout="fill"
              objectFit="cover"
              className="rounded-tr-3xl"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-tr-3xl"></div>
            Derecha 2
          </div>

          <div className="bg-green-600 p-4 flex items-center justify-center text-white text-xl relative h-full group">
            <Image
              src={i03}
              alt="Imagen principal de la galería"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            Derecha 3
          </div>

          <div className="bg-green-700 p-4 flex items-center justify-center text-white text-xl rounded-br-3xl relative h-full group">
            <Image
              src={i04}
              alt="Imagen principal de la galería"
              layout="fill"
              objectFit="cover"
              className="rounded-br-3xl"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-br-3xl"></div>
            Derecha 4
          </div>
        </div>
      </div>
    </>
  );
}