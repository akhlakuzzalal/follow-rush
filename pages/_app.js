import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import StateProvider from '../components/context/stateContext';
import Layout from '../components/Layer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
}

export default MyApp;
