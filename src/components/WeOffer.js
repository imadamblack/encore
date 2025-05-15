
import Image from 'next/image'; 
import ico01 from '../../public/landing/ico01.png'; 
import ico02 from '../../public/landing/ico02.png';

const WeOffer = () => {
    const OfferByPlace = [
        {
            icon: ico01, 
            descripcion: 'Vista al horizonte de la ciudad'
        },
        {
            icon: ico02, 
            descripcion: 'Cocina'
        },
        {icon: ico01,
            descripcion: 'Wifi'
        },
        {
            icon: ico02, 
            descripcion: 'Area para trabajar'
        },
        {
            icon: ico01, 
            descripcion: 'TV'
        },
        {
            icon: ico02, 
            descripcion: 'Detector de humo'
        },
        // ... otros elementos
    ];

    return (
        <>
            <div className='max-w-[1390px] mx-auto mt-10 px-[30px] w-full border-t border-b py-6' >
                <h3 className="text-3xl font-nunito font-semibold">Lo que ofrece este lugar</h3>

                {OfferByPlace.map((item, index) => (
                    <div key={index} className="w-full flex flex-row items-center gap-4 py-4">
                        
                        {/* Ajusta w y h según el tamaño deseado para el icono */}
                        <div className='relative w-[34px] h-[34px] p-0 overflow-hidden rounded bg-gray-100'> 
                            <Image
                                src={item.icon} 
                                alt={`Icono para ${item.descripcion}`} 
                                layout="fill" // Para que la imagen llene el div contenedor
                                objectFit="contain" // <-- O 'contain', para que la imagen se ajuste sin deformarse
                            
                            />
                        </div>
                        <div>
                            <div className='text-3xl '>{item.descripcion}</div>
                        </div>
                    </div>
                ))}

            </div>
        </>
    );
}

export default WeOffer;