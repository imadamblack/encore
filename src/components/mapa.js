const mapa = ({ ciudad, estado, pais, comentario, sede, UrlMap }) => {
  return (
    <div className='max-w-[1120px] mx-auto mt-10 px-[30px] w-full py-6'>
      <div className="text-5xl font-semibold font-nunito pb-4">Dónde vas a estar</div>
      <div className="text-3xl pb-8">{`${sede}, ${estado}, ${pais}`}</div>
      <div className="h-[500px] md:w-[100%] overflow-hidden rounded-3xl">
        {/* Reemplazamos la imagen por el iframe de Google Maps */}
        <iframe
          src={UrlMap}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="text-3xl font-semibold pt-10">{`${ciudad}, ${estado}, ${pais} `}</div>
      <p className="text-2xl text-justify py-6">{comentario}</p>
    </div>
  );
};

export default mapa;