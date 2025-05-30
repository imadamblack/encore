import Image from 'next/image';
import { DataAtlas } from '../../DataAtlas.js';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import ico01 from '../../public/landing/ico01.png';
import ico02 from '../../public/landing/ico02.png';
import ico03 from '../../public/landing/ico03.png';
import  Titulo  from '../components/titulo.js';
import  Subtitulo  from '../components/subtitulo.js';
import  Reserva  from '../components/reserva.js';
import  Caracteristicas  from '../components/caracteristicas.js';
import  Descriplong  from '../components/descripcion-detallada.js';
import  ReviewList  from '../components/ReviewList.js';
import Mapa  from '../components/mapa.js';
import WeOffer from '../components/WeOffer.js';
import Calificacion from '../components/Calificacion.js';


export default function Home() {
  const [lastClick, setLastClick] = useState('');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const cta = {
    main: 'Regístrate, da clic',
    description: 'Programa una consultoría y diagnóstico de tu negocio gratuitos',
  };

  const fechaActual = new Date()
  const formatDate = fechaActual.toISOString().split('T')[0];
  console.log(fechaActual);
  console.log(formatDate);


  return (
    <>
      <div className='mt-[80px]'></div>
      <Titulo
        titulo={DataAtlas.sede}
        subtitle="Ramada Encore by Wyndham"
      />
      <div className="container mx-auto mt-[50px] md:flex pb-10">
        <div className="md:w-[65%]">
            
            <Subtitulo
              titulo="Con el respaldo de quienes sí saben de hospitalidad"
              ciudad={DataAtlas.ciudad}
              pais={DataAtlas['pais']}
              subtitle=""
              />
            
            <Calificacion
              titulo="Favorito entre los huespedes"
              subtitle="Los huéspedes dicen que este lugar es increíble."
              calificacion={DataAtlas.calificacion}
              estrellas={DataAtlas.estrellas}
              evaluaciones={DataAtlas.evaluaciones}
              />

            <Caracteristicas
              icono1={<Image src={ico01} alt="Icono 1" />}
              header1="Llegada autónoma"
              description1="Realiza la llegada fácilmente con la cerradura con teclado."
              icono2={<Image src={ico02} alt="Icono 1" />}
              header2="Excelente ubicación"
              description2="A los huéspedes que se quedaron aquí el año pasado les encantó la ubicación."
              icono3={<Image src={ico03} alt="Icono 1" />}
              header3="Vistas a la ciudad"
              description3="Los huéspedes dicen que las vistas son espectaculares."
              />
            <div className="w-full h-px bg-gray-200"></div> 
            

            <Descriplong
              header="Ramada Encore by Wyndham"
              description={DataAtlas.longDescrption}
            />

            <div className="w-full h-px bg-gray-200"></div> 

            <WeOffer/>
          
        </div>

        <div className="md:w-[35%] relative mr-[30px] mb-10">
            <Reserva
              llegada={`${formatDate}`}
              salida="11/05/2025"
              huespedes={1}
            />
        </div>
      </div>

      

      <div className="w-full h-px bg-gray-200"></div>

      <ReviewList/>
      
      <div className="w-full h-px bg-gray-200"></div> 
      
      <Mapa
      ciudad={DataAtlas.ciudad}
      estado={DataAtlas.estado}
      sede={DataAtlas.sede}
      pais={DataAtlas.pais}
      UrlMap={DataAtlas.UrlMap}
      comentario={DataAtlas.mapaDescripcion}
      />
      

      
    </>
  );
}
