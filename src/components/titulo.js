// Tu componente 'titulo' (probablemente renombraría a algo más descriptivo, como 'PageHero' o 'SectionWithSlider')
import React from 'react';
// No necesitas importar 'Image' de Next.js si el slider maneja las imágenes
import ImageSlider from './ImageSlider.js';
import Galeria from './Galeria.js';

const Titulo = ({ titulo, subtitle }) => { 
  const images = [
    { src: '/imgSlider/00.png', alt: 'Imagen 00', caption: 'Hermoso paisaje montañoso' },
    { src: '/imgSlider/01.png', alt: 'Imagen 01', caption: 'Atardecer en la playa' },
    { src: '/imgSlider/02.png', alt: 'Imagen 02', caption: 'Ciudad nocturna' },
    { src: '/imgSlider/03.png', alt: 'Imagen 03', caption: 'Río serpenteante' },
    { src: '/imgSlider/04.png', alt: 'Imagen 04', caption: 'Bosque en otoño' },
  ];

  return (
    <>
      <div className='max-w-[1120px] mx-auto mt-10 px-[30px] w-full relative'>
        <div className="w-full">
          <div className="flex flex-row items-center  justify-between gap-y-2">
            <h2 className="text-3xl font-nunito font-semibold">{`Encore | ${titulo}`}
            </h2>
            <p className="text-lg">{subtitle}</p>
          </div>
        </div>

        {/* Aquí va el ImageSlider directamente */}
        {/* El contenedor del slider es quien debe definir el tamaño y el overflow */}
        <div className="md:hidden w-full h-[45vh] overflow-hidden rounded-xl relative mt-12">
            <ImageSlider
                images={images}
                interval={10000}
            />
        </div>

        {/*Carga la Galeria en version en pantallas medianas */}
        <Galeria
        />

        {/* Si quieres mostrar el contador del slider, puedes pasarlo como prop al ImageSlider
            o manejarlo dentro del ImageSlider mismo si conoces el índice actual.
            Por ahora, lo mantengo fuera, pero ten en cuenta que necesitaría saber el estado del slider.
        */}
        {/* <div
          className="absolute bottom-[20px] right-[20px] w-auto h-min-[30px] bg-black opacity-80 rounded-xl flex items-center px-4"
        >
          <span className="text-white">01 | 30</span>
        </div> */}
      </div>
    </>
  );
};

export default Titulo; // Te recomiendo usar 'Titulo' con mayúscula al inicio para componentes