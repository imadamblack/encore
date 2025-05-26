
const descripcion_detallada = ({header, description,}) => {
  return (
    <>
        <div className='max-w-[1120px] mx-auto my-10 px-[30px] w-full py-6' >
            <div className="w-full flex flex-col items-start gap-4 py-4">
                <div className='text-3xl font-bold'>{header}</div>
                
                <div>
                    <p className='text-3xl text-justify'>{description}</p>
                </div>
                <div>
                    <div className='text-2xl'><button className="bg-red-600 hover:bg-red-600 mt-10">Mostrar Más</button></div>
                </div>
            </div>
            
            </div>   
        
        
    </>
  )
}

export default descripcion_detallada;