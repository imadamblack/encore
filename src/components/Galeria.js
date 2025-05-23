import React, { useState } from 'react';
import Image from 'next/image';
import i00 from '../../public/imgSlider/00.webp';
import i01 from '../../public/imgSlider/01.webp';
import i02 from '../../public/imgSlider/02.webp';
import i03 from '../../public/imgSlider/03.webp';
import i04 from '../../public/imgSlider/04.webp';
import i05 from '../../public/imgSlider/05.webp';
import i06 from '../../public/imgSlider/05.webp';
import i07 from '../../public/imgSlider/07.webp';
import i08 from '../../public/imgSlider/08.webp';
import i09 from '../../public/imgSlider/09.webp';
import i10 from '../../public/imgSlider/10.webp';
import i11 from '../../public/imgSlider/11.webp';
import i12 from '../../public/imgSlider/12.webp';
import i13 from '../../public/imgSlider/13.webp';
import i14 from '../../public/imgSlider/14.webp';
import i15 from '../../public/imgSlider/15.webp';
import i16 from '../../public/imgSlider/16.webp';
import i17 from '../../public/imgSlider/17.webp';
import i18 from '../../public/imgSlider/18.webp';
import i19 from '../../public/imgSlider/19.webp';
import i20 from '../../public/imgSlider/20.webp';
import i21 from '../../public/imgSlider/21.webp';
import i22 from '../../public/imgSlider/22.webp';
import i23 from '../../public/imgSlider/23.webp';
import i24 from '../../public/imgSlider/24.webp';
import i25 from '../../public/imgSlider/25.webp';
import i26 from '../../public/imgSlider/26.webp';
import i27 from '../../public/imgSlider/27.webp';



export default function Galeria() {
  const [mostrarGaleria, setMostrarGaleria] = useState(false);
  const imagenes = [i00, i01, i02, i03, i04, i05, i06, i07, i08, i09, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19, i20, i21, i22, i23, i24, i25, i26, i27];// Todas las imágenes

  return (
    <>
      {/* Contenedor principal */}
      <div className="w-full h-[50vh] max-w-[1120px] mx-auto px-[5px] hidden md:flex flex-col md:flex-row overflow-hidden mt-12 gap-3 relative">

        {/* Columna Izquierda */}
        <div className="w-full md:flex-1 bg-blue-400 p-4 sm:h-[50vh] flex items-center justify-center text-white text-2xl sm:rounded-3xl md:rounded-l-3xl relative h-full group">
          <Image
            src={i00}
            alt="Imagen principal de la galería"
            layout="fill"
            objectFit="cover"
            className="md:rounded-l-3xl"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 md:rounded-l-3xl"></div>
          Contenedor Izquierdo (Imagen Principal)
        </div>

        {/* Columna Derecha */}
        <div className="hidden md:flex-1 md:grid grid-cols-2 grid-rows-2 gap-3">
          {/* Sub-contenedores de la columna derecha */}
          {[i01, i02, i03, i04].map((imagen, index) => (
            <div
              key={index}
              className={`bg-green-${400 + index * 100} p-4 flex items-center justify-center text-white text-xl relative h-full group ${index === 1 ? 'rounded-tr-3xl' : ''} ${index === 3 ? 'rounded-br-3xl' : ''}`}
            >
              <Image
                src={imagen}
                alt={`Imagen ${index}`}
                layout="fill"
                objectFit="cover"
                className={`${index === 1 ? 'rounded-tr-3xl' : ''} ${index === 3 ? 'rounded-br-3xl' : ''}`}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              Derecha {index + 1}
            </div>
          ))}
        </div>

        {/* Botón para abrir la galería */}
        <button
          className="absolute bottom-6 right-6 z-[99] bg-white border border-solid border-black text-gray-900 px-4 py-2 rounded-md text-2xl cursor-pointer"
          onClick={() => setMostrarGaleria(true)}
        >
          ♥ Mostrar todas las fotos
        </button>
      </div>

      {/* Fondo oscuro con transición */}
      {mostrarGaleria && (
        <div 
          className={`fixed inset-0 bg-black/60 flex items-center justify-center z-[100] transition-opacity duration-900 ${
            mostrarGaleria ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMostrarGaleria(false)} // Cierra al hacer clic fuera
        >
          {/* Modal de la galería con animación */}
          <div 
            className={`bg-white p-6 w-full max-h-[100vh] overflow-y-auto transform transition-all duration-300 ${
              mostrarGaleria ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()} // Evita cierre al hacer clic dentro
          >
            {/* Contenedor sticky para el título y el botón de cerrar */}
            <div className="sticky top-0 left-0 right-0 max-w-[1000px] mx-auto bg-white z-50 flex justify-between items-center p-4 px-12 shadow rounded-full">
              <h2 className="text-3xl font-bold font-nunito">Galería Completa</h2>
              <button
                className="text-3xl font-bold text-gray-600 hover:text-gray-800 transition duration-300 rounded-full w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200"
                onClick={() => setMostrarGaleria(false)}
              >
                &times;
              </button>
            </div>

            {/* Contenedor de imágenes con diseño alternado */}
            <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1120px] mx-auto gap-4 mt-4">
              {imagenes.map((imagen, index) => {
                // Alternar entre imágenes grandes y pequeñas
                const isLarge = index % 3 === 0; // Imagen grande cada 3 elementos
                return (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-lg ${
                      isLarge ? 'md:col-span-2 row-span-2' : ''
                    }`}
                  >
                    <Image
                      src={imagen}
                      alt={`Galería ${index}`}
                      width={isLarge ? 800 : 400} // Ajusta el ancho según el tamaño
                      height={isLarge ? 600 : 300} // Ajusta la altura según el tamaño
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}