
const descripcion_detallada = ({header, description,}) => {
  return (
    <>
        <div className='max-w-[1120px] mx-auto mt-10 px-[30px] w-full py-6' >
            <div className="w-full flex flex-col items-start gap-4 py-4">
                <div className='text-3xl font-bold'>{header}</div>
                
                <div>
                    <div className='text-2xl text-justify'>{description}</div>
                </div>
                <div>
                    <div className='text-2xl'><button>Mostrar Más</button></div>
                </div>
            </div>
            
            </div>   
        
        
    </>
  )
}

export default descripcion_detallada;