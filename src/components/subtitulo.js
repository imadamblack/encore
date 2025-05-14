import React from 'react'
import Image from 'next/image';

const subtitulo = ({titulo, subtitle, ciudad, pais}) => {
  return (
    <>
        <div className='max-w-[1390px] mx-auto mt-10 px-[30px] w-full relative' >
            <div className="w-full">
                <div className="flex flex-col gap-y-6">
                    <h2 className="text-3xl font-nunito font-semibold">{titulo}</h2>
                    <h4 className="text-lg font-nunito">{`${ciudad}, ${pais}`}</h4>
                    <h4 className="text-lg font-nunito">{subtitle}</h4>

                    {/*hacer un nuevo componente de caracteristicasp beneficios */}
                    <div className='bg-red-500'>
                        {/*<ul>
                            <li>4 huepedes</li>
                            <li>4 huepedes</li>
                            <li>4 huepedes</li>
                            <li>4 huepedes</li>
                            <li>4 huepedes</li>


                        </ul>*/}
                    </div>
                    

                </div>
            </div>
        </div>
        
    </>
  )
}

export default subtitulo;