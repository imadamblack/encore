const mapa = ({ ciudad, estado, pais, comentario }) => {
  return (
    <div className='max-w-[1120px] mx-auto mt-10 px-[30px] w-full py-6'>
      <div className="text-5xl font-semibold font-nunito pb-4">Dónde vas a estar</div>
      <div className="text-3xl pb-8">{`${ciudad}, ${estado}, ${pais}`}</div>
      <div className="h-[500px] md:w-[100%] overflow-hidden rounded-3xl">
        {/* Reemplazamos la imagen por el iframe de Google Maps */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.4943520948136!2d-103.4488361015852!3d20.586878901850287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f54b8dc35bb6f%3A0xc5acad50c63f0fee!2sRamada%20Encore%20Guadalajara%20Sur!5e0!3m2!1ses!2smx!4v1747953915451!5m2!1ses!2smx"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="text-3xl font-semibold pt-8">{`${ciudad}, ${estado}, ${pais} `}</div>
      <div className="text-2xl text-justify pt-4">{comentario}</div>
    </div>
  );
};

export default mapa;