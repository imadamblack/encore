// src/pages/_app.js

import '../styles/globals.scss'; // Tu SCSS global existente
import 'swiper/css';
import '../styles/react-datepicker.css'; // <-- ¡IMPORTA LA COPIA LOCAL AQUÍ!

import Layout from '../components/layout/layout';
import { useRouter } from 'next/router';
import { setCookie, getCookie } from 'cookies-next';


function MyApp({Component, pageProps}) {
  const {query: { fbclid }} = useRouter();
  const _fbc = getCookie('_fbc');

  if (!_fbc && fbclid) {
    const date = new Date();
    setCookie(
      '_fbc',
      `fb.1.<span class="math-inline">\{Date\.now\(\)\}\.</span>{fbclid}`,
      {expires: new Date(date.setDate(date.getDate() + 7))}
    );
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;