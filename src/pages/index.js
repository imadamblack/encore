import Image from 'next/image';
import { DataAtlas } from '../../DataAtlas.js';
import Blockbuster from '../components/blockbuster';
import ImageGrid  from '../components/imagegrid.js';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import i00 from '../../public/landing/00.png';
import i01 from '../../public/landing/01.png';
import i02 from '../../public/landing/02.png';
import i03 from '../../public/landing/03.png';
import i04 from '../../public/landing/04.png';
import i05 from '../../public/landing/10.png';
import i06 from '../../public/landing/06.png';
import i07 from '../../public/landing/07.png';
import i08 from '../../public/landing/08.png';
import i09 from '../../public/landing/09.png';
import i10 from '../../public/landing/10.png';
import i11 from '../../public/landing/11.png';
import clientes1 from '../../public/landing/nuestros-clientes-a.jpg';
import clientes2 from '../../public/landing/nuestros-clientes-b.jpg';
import clientes3 from '../../public/landing/nuestros-clientes-c.jpg';
import clientes4 from '../../public/landing/nuestros-clientes-d.jpg';
import clientes5 from '../../public/landing/nuestros-clientes-e.jpg';
import ico01 from '../../public/landing/ico01.png';
import ico02 from '../../public/landing/ico02.png';
import ico03 from '../../public/landing/ico03.png';
import ico04 from '../../public/landing/ico04.png';
import Faqs from '../components/faqs';
import  Titulo  from '../components/titulo.js';
import  Subtitulo  from '../components/subtitulo.js';
import  Reserva  from '../components/reserva.js';
import  Caracteristicas  from '../components/caracteristicas.js';
import  Descriplong  from '../components/descripcion-detallada.js';
import  ReviewList  from '../components/ReviewList.js';
import Mapa  from '../components/mapa.js';
import WeOffer from '../components/WeOffer.js';
import Calificacion from '../components/Calificacion.js';
import Calendario from '../components/calendario.js';
import AllLocations from '../components/AllLocations.js'


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
      <div className="max-w-[1120px] mx-auto mt-[50px] md:flex pb-10">
        <div className="md:w-[65%]">
            
            <Subtitulo
              titulo="Ramada Encore es todo lo que esperas de un hotel"
              ciudad={DataAtlas.ciudad}
              pais={DataAtlas['pais']}
              subtitle="Con el xxxxxxxxxxxxxxxxx de hospitalidad"
              />
            
            <Calificacion
              t_01={'Certificacion xxxxxx'}
              t_02={'fast pasta'}
              t_03={' muestra el cambio'}
              alto={64}
              ancho={64}
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
              description1={DataAtlas.longDescrption1}
              description2={DataAtlas.longDescrption2}
              description3={DataAtlas.longDescrption3}
            />

            <div className="w-full h-px bg-gray-200"></div> 

            <WeOffer/>
            
            <div className="w-full h-px bg-gray-200"></div> 

            <Calendario
              titulo = "Reserva tu habitacion en segundos, Facil , Rapido  y Sin complicaciones"
            />
          
        </div>

        <div className="md:w-[35%] relative mr-[30px] mb-10">
            <Reserva
              llegada={`${formatDate}`}
              salida="11/05/2025"
              huespedes={1}
              precio={1600}
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
      <AllLocations
        titulo = "¿Vas a otra Ciudad?"
        comentario = "Todas nuestras sedes están estratégicamente ubicadas en puntos clave: zonas industriales, comerciales, de eventos o cercanas a aeropuertos."
      />
      

      
    </>
  );
}
