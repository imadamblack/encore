import Image from 'next/image';
import mapaimg from '../../public/landing/13.png'

const mapa = ({ciudad, estado, pais, comentario}) => {
  return (
    <div className='max-w-[1390px] mx-auto mt-10 px-[30px] w-full border-t border-b py-6' >
        <div className="text-3xl font-semibold">Ubicacion</div>
        <div className="h-[50h] md:w-[50%] overflow-hidden rounded-3xl ">
            <Image
                src={mapaimg}
                alt="imagen de prueba"
                />
        </div>
        <div className="text-3xl font-semibold">{`${ciudad} ${estado}, ${pais} `}</div>
        <div className="text-2xl text-justify">{comentario}</div>
        
        
    </div>
  )
};

export default mapa;
