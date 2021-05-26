import { AuthProvider } from '../auth';
import { Basket } from '../contexts/BasketContext';
import '../styles/Global.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <meta name="Børres-Burger" content="Burger restaurant hvor du kan 
      bestille burgere til take-away"/>
      <AuthProvider>
        <Basket>
          <Component lang="no" {...pageProps} />
        </Basket>
      </AuthProvider>
    </>
  )
}

export default MyApp