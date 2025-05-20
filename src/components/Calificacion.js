import React from 'react'

export default function Calificacion ({titulo, calificacion, evaluaciones, subtitle, estrellas}) {
  return (
    <>
        <div className='max-w-[1120px] mx-auto mt-10 px-[30px] w-full relative' >
            <div className="w-full p-6">
                <div className="flex flex-col gap-y-6 ">
                    
                    <div className="flex items-center gap-x-2 flex-row border border-gray-300 rounded-2xl p-8 px-10 justify-around  ">
                        <div className="flex flex-col items-center">
                            <h4 className="text-lg font-nunito">{`${calificacion}`}</h4>
                            <span className="text-3xl font-nunito">{`${estrellas}`}</span>
                        </div>
                        <div className="hidden md:block w-px h-16 bg-gray-300"></div>
                        <div className="hidden md:flex flex-col items-center">
                            <h4 className="text-lg font-nunito">{`${titulo}`}</h4>
                            <span className="text-3xl font-nunito">{`${subtitle}`}</span>
                        </div>
                        <div className="w-px h-16 bg-gray-300"></div>
                        <div className="flex flex-col items-center">
                            <h4 className="text-lg font-nunito">{`${evaluaciones}`}</h4>
                            <span className="text-2xl font-nunito font-bold">Evaluaciones</span>
                        </div>
                    </div>
                                       

                </div>
            </div>
        </div>
        
    </>
  )
}
