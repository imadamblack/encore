
const review = ({user_img, nombre, ciudad, pais, calificacion, fecha, tipo, comentario}) => {
  return (
    <>
        <div className='max-w-[1390px] mx-auto mt-10 px-[30px] w-full border-t border-b py-6' >
              <div className="my-10">
                <div className="flex flex-row items-center gap-8">
                    <div className="rounded-full w-[64px] ">{user_img}</div>
                    <div>
                        <div className="text-3xl font-semibold">{nombre}</div>
                        <div className="text-xl">{`${ciudad}, ${pais}`}</div>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-8 mt-4">
                    <div className="text-xl">{calificacion}</div>
                    |
                    <div className="text-xl font-semibold">{fecha}</div>
                    |
                    <div className="text-xl">{tipo}</div>
                </div>
                <div className="text-2xl font-semibold">{comentario}</div>
              </div>
        </div>
        
    </>
  )
}

export default review;