import React from 'react'
import Image from 'next/image';

const titulo = ({titulo, subtitle,imgSrc}) => {
  return (
    <>
        <div className='max-w-[1390px] mx-auto mt-10 px-[30px] w-full relative' >
            <div className="w-full">
                <div className="flex flex-col gap-y-6">
                    <h2 className="text-3xl font-nunito font-semibold">{titulo}</h2>
                    <p className="text-lg">{subtitle}</p>
                </div>
            </div>

            {/* Imagen que ocupa todo el ancho visible (menos los 30px de padding) */}
            <div className="w-full h-[60vh] overflow-hidden rounded-xl relative mt-12">
                <Image
                src={imgSrc}
                alt="Airbnb"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                />
            </div>
            <div 
                className="absolute bottom-[20px] right-[20px] w-auto h-min-[30px] bg-black opacity-80 rounded-xl flex items-center px-4"
            >
                <span className="text-white">01 | 30</span>
            </div>        
        </div>
        
    </>
  )
}

export default titulo;