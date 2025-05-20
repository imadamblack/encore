import Image from 'next/image';
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
import ImageSlider from '../components/ImageSlider.js';
import Galeria from '../components/Galeria.js';

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


  return (
    <>
      <Galeria/>
      <Titulo
        titulo="Oficinas gdl"
        subtitle="Espacios libres para el trabajo"
        imgSrc={i00}  
      />
      <Reserva
        llegada="10/05/2025"
        salida="11/05/2025"
        huespedes={4}
      />
      <Subtitulo
        titulo="Alojamiento"
        ciudad="Guadalajara"
        pais="México"
        subtitle=""
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
      

      <Descriplong
        header="Descripción"
        description="Acogedor estudio ejecutivo con todos los servicios necesarios para una estancia productiva y confortable. Ubicado en la zona financiera de Guadalajara, estarás cerca de importantes centros como Midtown y Punto Sao Paulo y toda la oferta culinaria que la colonia Providencia tiene para ofrecer. Disfruta de una cocina equipada, un balcón para tomar aire fresco, una sala de juntas y un exclusivo rooftop con vistas panorámicas de la ciudad.
No contamos con estacionamiento"       
      />

      <WeOffer/>
      
      <ReviewList
        user_img={<Image src={i03} alt="Imagen de usuario" />}
        nombre="Juan Jose"
        ciudad="Zapopan"
        pais="México"
        calificacion="⭐⭐⭐⭐⭐"
        fecha="Enero 2023"
        tipo="Viaje de negocios"
        comentario="Un anfitrión muy receptivo y un lugar genial:) Me hospedaría aquí de nuevo.s"   
      />
      <Mapa
      ciudad="Guadalajara"
      estado="Jalisco"
      pais="México"
      comentario="Lapso at Asís se encuentra en la calle Asís, entre Florencia y Verona, en la reconocida Zona Financiera de Guadalajara. Su ubicación es estratégica, a solo unos pasos de importantes avenidas como Adolfo López Mateos y Américas, y a tan solo 2 minutos a pie de Plaza Midtown. Además, se encuentra a 5 minutos en automóvil de Punto Sao Paulo y el Country Club."
      />

      
    </>
  );
}
